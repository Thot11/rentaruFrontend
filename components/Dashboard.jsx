/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {updateMe, updatePP} from '../store'

import DropDown from "../elements/DropDown";
import Button from "../elements/Button";
import CheckBox from "../elements/CheckBox";
import { getCommandesById, getMyCollectionsOrders, getMyReadings, postTransfert } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";
import Dropdown from "./dropdown"
import Modal from "./Modal"

import Moment from 'moment';
import 'moment/locale/fr'
import { extendMoment } from 'moment-range';
import Link from "next/link";


const Dashboard = ({ user, setTabs }) => {

  const moment = extendMoment(Moment);
  
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);

  const [handToHand, setHandToHand] = useState()
  const [myCollectionOrders, setMyCollectionOrders] = useState([])
  const [myReadingsOrders, setMyReadingsOrders] = useState([])
  const [relaiColis, setRelaiColis] = useState()
  const [phoneChecked, setPhoneChecked] = useState()
  const [mailChecked, setMailChecked] = useState()
  const [idChecked, setIdChecked] = useState()
  const [selectedCommandes, setSelectedCommandes] = useState(0)
  const [lastCommandes, setLastCommandes] =  useState([])
  const [endOrders, setEndOrders] =  useState([])
  const [showMoreTransactions, setShowMoreTransactions] = useState(false)
  const [myLastCommandes, setMyLastCommandes] =  useState([])
  const [openGiveMoneyBack, setOpenGiveMoneyBack] = useState(false)
  const [modalStep, setModalStep] = useState(1)
  const [IBAN, setIBAN] = useState('')
  const [accountName, setAccountName] = useState('')
  const [amountToMove, setAmountToMove] = useState(0)
  const [error, setError] = useState('')

  const [memberSince, setMemberSince] = useState('');
  
  const [windowWidth, setWindowWidth] = useState(1281);  

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
  }, []);

  const updateSize = () => {
    setWindowWidth(window.innerWidth)
  }

  const calculDate = () => {
    const now = Date.now();
    const currentDate = now - new Date(user.created_at);
    setMemberSince(Math.trunc(currentDate/1000/60/60/24))
  }

  const createTransfert = (data) => {
    postTransfert(data, session).then(resp => {
      if (resp) {
        const data = {cagnotte: user.cagnotte - resp.data.amount}
        dispatch(updateMe(data, session))
        setModalStep(2)
      }
    }).catch(() => {
      setError('Problème, veuillez réessayer ou nous contacter svp')
    })
  }

  useEffect(() => {
    calculDate();
    if (session && user.id) {
      getMyCollectionsOrders(user.id, session).then(resp => {
        if (resp) {
          const filterEnd = resp.filter(order => order.receiveCollector)
          setMyCollectionOrders(filterEnd);
        }
      });
      getMyReadings(user.id, session).then(resp => {
        if (resp) {
          const filterEnd = resp.filter(order => order.receiveCollector)
          setMyReadingsOrders(filterEnd);
        }
      });
      setIBAN(user.IBAN)
      setAccountName(user.accountName)
    }
  }, [user])

  useEffect(() => {
    if (myReadingsOrders.length > 0 || myCollectionOrders.length > 0) {
      const mixArray = [...myCollectionOrders, ...myReadingsOrders]
      const temp = mixArray.slice().sort((a, b) => {
        return new Date(a.endDate) - new Date(b.endDate)
      })
      setEndOrders(temp.reverse());
    }
  }, [myCollectionOrders, myReadingsOrders])

  useEffect(() => {
    setPhoneChecked(user.phone)
    setMailChecked(user.email)
    if (user.handToHand !== handToHand) setHandToHand(user.handToHand)
    if (user.relaiColis !== relaiColis) setRelaiColis(user.relaiColis)
  }, [user])

  const updateInfo = (infos) => {
    const data = infos;
    dispatch(updateMe(data, session))
  }
  
  useEffect(() => {
    if (amountToMove > user.cagnotte) {
      setAmountToMove(user.cagnotte)
    }
  }, [amountToMove, user.cagnotte])

  useEffect(() => {
    if (handToHand !== user.handToHand) {
      updateInfo({handToHand})
    }
  }, [handToHand])

  useEffect(() => {
    if (relaiColis !== user.relaiColis) {
      updateInfo({relaiColis})
    }
  }, [relaiColis])

  useEffect(() => {
    if (user.commandes && user.commandes.length > 0) {
      let commandesId = []
      user.commandes.reverse().slice(0,3).forEach((commande, index) => {
        if (index === 0 ) commandesId.push('id_in=' + commande.id)
        else commandesId.push('&id_in=' + commande.id)
      })
      getCommandesById(commandesId, session).then((resp) => {
        setLastCommandes(resp)
      })
    }
  }, [user.commandes])

  useEffect(() => {
    if (user.ownerCommandes && user.ownerCommandes.length > 0) {
      let commandesId = []
      user.ownerCommandes.reverse().slice(0,2).forEach((commande, index) => {
        if (index === 0 ) commandesId.push('id_in=' + commande.id)
        else commandesId.push('&id_in=' + commande.id)
      })
      getCommandesById(commandesId, session).then((resp) => {
        setMyLastCommandes(resp)
      })
    }
  }, [user.ownerCommandes])


  return (
    <>
    {openGiveMoneyBack && (
      <Modal open={openGiveMoneyBack} setOpen={setOpenGiveMoneyBack} onClick={() => setModalStep(1)}>
        {modalStep === 1 ? (
          <>
            <div className="title">Transférer une somme</div>
            <div className="cagnotte">
              <div className="left">
                <img src="/bank.svg" alt="pièce d'or" />
                <div className="body">Mon porte-monnaie Rentaru</div>
              </div>
              <div className="solde">{new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(user.cagnotte)}</div>
            </div>
            <div className="arrowContainer">
              <img src="/arrowLongDown.svg" alt="" className="arrowDown"/>
            </div>
            <DropDown title="Mon compte" color="Dark">
              <input type="text" placeholder='Nom de compte' className="postalCode" value={accountName} onChange={(e) => setAccountName(e.target.value)}/>
              <input type="text" placeholder='IBAN' className="country" value={IBAN} onChange={(e) => setIBAN(e.target.value)}/>
            </DropDown>
            <div className="inputContainer">
              <input type="number" value={amountToMove} onChange={(e) => setAmountToMove(e.target.value)} />
              <div className="all" onClick={() => setAmountToMove(user.cagnotte)}>Max</div>
            </div>
            {error && (<div className="error">{error}</div>)}
            <Button color="Red" functionOnClick={() => createTransfert({user: user.id, IBAN, accountName, amount: amountToMove})}>
              Valider le transfert
            </Button>
          </>
        ) : (
          <>
            <img src="/cuteCat.svg" alt="cute cat" className="cuteCat"/>
            <div className="endTransfert">Ton transfert a été complété avec succès, en cas de soucis veuillez nous contacter via la page contact. Merci</div>
          </>
        )}
      </Modal>
    )}
      <div className={"middleContainer middleContainerDashboard"}>
        {/* {windowWidth >= 700 && */}
          <div className="left">
            <div className="top cagnotte">
              <div className="header">
                <div className="title">Solde Rentaru</div>
              </div>
              <div className="money">
                <div className="solde">{new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(user.cagnotte)}</div>
                <span>Disponible</span>
              </div>
              <Button color="Red" functionOnClick={() => setOpenGiveMoneyBack(true)}>
                Transférer l'argent
              </Button>
            </div>
            <div className="middle">
              <div className="title">Historique des transactions</div>
              <div className="ordersEndContainer">
                {endOrders.map((order, index) => {
                  const mine = order.owner.username === user.username;
                  if (index > 3 && !showMoreTransactions) return null;
                  return (
                    <div className="order">
                      <div className='header'>
                        <div className="leftMiddle">
                          {order.product.title} | Tome {order.product.tomeInitial} à {order.product.tomeFinal}
                        </div>
                        <div className="price">
                          {mine ? new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(order.priceOwner) : new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(order.priceTot)}
                        </div>
                      </div>
                      <div className="body">
                        <div className="date">
                        {moment(order.startDate).format('Do MMMM')}-{moment(order.endDate).format('Do MMMM')}
                        </div>
                        <div className="rightMiddle">
                          {mine ? (
                            <>
                              Reçu 
                              <img src="/arrowRight.svg" alt="flèche" className="reverse" />
                            </>
                          ) : (
                            <>
                              Envoyé 
                              <img src="/arrowRight.svg" alt="flèche" />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {endOrders.length > 4 && (
                <p className="showMore" onClick={() => setShowMoreTransactions(true)}>Voir toutes les transactions</p>
              )}
            </div>
          </div>
        {/* } */}
        <div className="right">
          <div className="topBox">
            <div className="title">
              Dernières commandes effectuées
            </div>
            <Dropdown filters={['Mes lectures', 'Ma collection']} selectedItem={selectedCommandes} setSelectedItem={setSelectedCommandes} />
          </div>
          <div className="commandesContainer">
            {selectedCommandes === 0 && lastCommandes.map((commande) => {
              const range =  moment.range(commande.startDate, commande.endDate)
              const now = range.contains(moment())
              return (
                <div className="commande">
                  <img src={getStrapiMedia(commande.product.imageCover.formats.thumbnail.url)} alt=""/>
                  <div className="middle">
                    <div className="up">
                      <div className='header'>{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} 
                        <div className={`statut ${commande.status === 'draft' ? 'draft' : !commande.sendCollector ? 'later' : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'done' : 'later' :  moment(commande.endDate) > moment() ? 'now' : 'later' : 'later'}`} >
                          {commande.status === 'draft' ? (<><img src="/pending.svg" alt="icon pending" /> En attente de validation</>) : !commande.sendCollector ? (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'Terminée' : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</> :  moment(commande.endDate) > moment() ? <><img src="/enCours.svg" alt="icon pending" />Location en cours</> : (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</>}
                        </div>
                      </div>
                      <div><span>{commande.owner.username}</span>&nbsp; | {commande.owner.ville}  ({commande.owner.departement})</div>
                    </div>
                    <div className="down">
                      <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                      <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                    </div>
                  </div>
                </div>
              )
            })}
            {selectedCommandes === 1 && myLastCommandes.map((commande) => {
              const range =  moment.range(commande.startDate, commande.endDate)
              const now = range.contains(moment())
              return (
                <div className="commande">
                  <img src={getStrapiMedia(commande.product.imageCover.formats.thumbnail.url)} alt=""/>
                  <div className="middle">
                    <div className="up">
                      <div className='header'>{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} 
                        <div className={`statut ${commande.status === 'draft' ? 'draft' : !commande.sendCollector ? 'later' : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'done' : 'later' :  moment(commande.endDate) > moment() ? 'now' : 'later' : 'later'}`} >
                          {commande.status === 'draft' ? (<><img src="/pending.svg" alt="icon pending" /> En attente de validation</>) : !commande.sendCollector ? (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'Terminée' : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</> :  moment(commande.endDate) > moment() ? <><img src="/enCours.svg" alt="icon pending" />Location en cours</> : (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</>}
                        </div>
                      </div>
                      <div><span>{commande.not_owner.username}</span>&nbsp; | {commande.not_owner.ville}  ({commande.not_owner.departement})</div>
                    </div>
                    <div className="down">
                      <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                      <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};


const Verification = ({checked, checkedText, notCheckedText, input, changeInput}) => {

  return (
    <div className="verif">
      {checked ? (
        <>
          <img src="/checkGreen.svg" alt=""/>
          {input ? (
            <input type="text" defaultValue={checkedText} onChange={(e) => changeInput(e.target.value)}/>
          ) : (
            <p className="checkedText" >{checkedText}</p>
          )}
        </>
      ) : (
        <>
          <img src="/+2.svg" alt=""/>
          {input ? (
            <input type="text" defaultValue={''} onChange={(e) => changeInput(e.target.value)}/>
          ) : (
            <p className="notCheckedText" >{notCheckedText}</p>
          )}
        </>
      )}
    </div>
  )
}

export default Dashboard;
