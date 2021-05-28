/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {updateMe, updatePP} from '../store'

import Button from "../elements/Button";
import CheckBox from "../elements/CheckBox";
import { getCommandesById } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";
import Dropdown from "./dropdown"

import Moment from 'moment';
import 'moment/locale/fr'
import { extendMoment } from 'moment-range';
import Link from "next/link";


const Dashboard = ({ user, setTabs }) => {

  const moment = extendMoment(Moment);
  
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);

  const [handToHand, setHandToHand] = useState()
  const [relaiColis, setRelaiColis] = useState()
  const [phoneChecked, setPhoneChecked] = useState()
  const [mailChecked, setMailChecked] = useState()
  const [idChecked, setIdChecked] = useState()
  const [selectedCommandes, setSelectedCommandes] = useState(0)
  const [lastCommandes, setLastCommandes] =  useState([])
  const [myLastCommandes, setMyLastCommandes] =  useState([])

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

  useEffect(() => {
    calculDate()
  }, [user])

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
      <div className={"middleContainer middleContainerDashboard"}>
        {windowWidth >= 700 &&
          <div className="left">
            <div className="top cagnotte">
              <div className="header">
                <div className="title">Solde Rentaru</div>
                <img src="/3dots.svg" alt="3 petits points" />
              </div>
              <div className="money">
                <div className="solde">{new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(user.cagnotte)}</div>
                <span>Disponible</span>
              </div>
              <Button color="Red">
                Transférer l'argent
              </Button> 
            </div>
            <div className="middle">
              
            </div>
          </div>
        }
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
