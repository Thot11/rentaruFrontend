/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useSelector, useDispatch } from 'react-redux';
import Link from "next/link";
import Button from "../elements/Button";
import { updateUser } from "../utils/api";
import {updateMe} from '../store'
import { getStrapiMedia } from "../utils/medias";

import Dropdown from "../components/dropdown"

import { getMyCollectionsOrders, getMyReadings, updateCommande, deleteCommande } from "../utils/api";
import { useEffect, useState } from "react";

import Moment from 'moment';
import 'moment/locale/fr'
import { extendMoment } from 'moment-range';
import Modal from "../components/Modal";

const Orders = ({}) => {

  const moment = extendMoment(Moment);
  const dispatch = useDispatch()

  const { session, user } = useSelector((state) => state);

  const [selectedCommandes, setSelectedCommandes] = useState(0)
  const [myCollectionOrders, setMyCollectionOrders] = useState([])
  const [myReadingsOrders, setMyReadingsOrders] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [load, setLoad] = useState(false)
  const [openModalFunction, setOpenModalFunction] = useState({function: () => null})
  const [notifs, setNotifs] = useState([])

  useEffect(() => {
    if (session && user.id) {
      getMyCollectionsOrders(user.id, session).then(resp => {
        if (resp) {
          resp.sort((a,b) => {
            if(b.status === 'draft') return 1;
            else return -1;
          })
          setMyCollectionOrders(resp);
        }
      });
      getMyReadings(user.id, session).then(resp => {
        if (resp) {
          resp.sort((a,b) => {
            if(b.status === 'draft') return 1;
            else return -1;
          })
          setMyReadingsOrders(resp);
        }
      });
    }
  }, [user])

  useEffect(() => {
    const temp1 = myReadingsOrders.filter(order => order.status === 'draft')
    const temp2 = myCollectionOrders.filter(order => order.status === 'draft')
    const temp3 = []
    if (temp1.length > 0) {
      temp3.push({index: 0, nb: temp1.length})
    }
    if (temp2.length > 0) {
      temp3.push({index: 1, nb: temp2.length})
    }
    setNotifs(temp3)
  }, [myReadingsOrders, myCollectionOrders])

  const validate = (commandeId) => {
    setOpenModal(true)
    setOpenModalFunction({function: () => {
      updateCommande(commandeId, {status : 'published'}, session).then(() => {
        const temp = myCollectionOrders.findIndex((order) => order.id === commandeId)
        myCollectionOrders[temp].status = 'published'
        setMyCollectionOrders([...myCollectionOrders])
        setOpenModal(false)
        setLoad(false)
      })
    }})
  }

  const sent = (commandeId, type) => {
    if (type === 'collectionneur') {
      setOpenModal(true)
      setOpenModalFunction({function: () => {
        updateCommande(commandeId, {sendCollector : true}, session).then(() => {
          const temp = myCollectionOrders.findIndex((order) => order.id === commandeId)
          myCollectionOrders[temp].sendCollector = true
          setMyCollectionOrders([...myCollectionOrders])
          setOpenModal(false)
          setLoad(false)
        })
      }})
    } else {
      setOpenModal(true)
      setOpenModalFunction({function: () => {
        updateCommande(commandeId, {sendReader : true}, session).then(() => {
          const temp = myReadingsOrders.findIndex((order) => order.id === commandeId)
          myReadingsOrders[temp].sendReader = true
          setMyReadingsOrders([...myReadingsOrders])
          setOpenModal(false)
          setLoad(false)
        })
      }})
    }
  }

  const receive = (commandeId, type) => {
    if (type === 'collectionneur') {
      setOpenModal(true)
      setOpenModalFunction({function: () => {
        updateCommande(commandeId, {receiveCollector : true}, session).then((resp) => {
          const data = {cagnotte: resp.data.priceOwner + user.cagnotte}
          dispatch(updateMe(data, session))
          const temp = myCollectionOrders.findIndex((order) => order.id === commandeId)
          myCollectionOrders[temp].receiveCollector = true
          setMyCollectionOrders([...myCollectionOrders])
          setOpenModal(false)
          setLoad(false)
        })
      }})
    } else {
      setOpenModal(true)
      setOpenModalFunction({function: () => {
        updateCommande(commandeId, {receiveReader : true}, session).then(() => {
          const temp = myReadingsOrders.findIndex((order) => order.id === commandeId)
          myReadingsOrders[temp].receiveReader = true
          setMyReadingsOrders([...myReadingsOrders])
          setOpenModal(false)
          setLoad(false)
        })
      }})
    }
  }

  const cancel = (commandeId, type) => {
    setOpenModal(true)
    setOpenModalFunction({function: () => {
      deleteCommande(commandeId, session).then(() => {
        const tempOrders = [...myReadingsOrders, ...myCollectionOrders]
        const deletedOrder = tempOrders.filter((order) => order.id === commandeId)
        if (deletedOrder[0].cagnotte) {
          updateUser(deletedOrder[0].not_owner.id, {cagnotte: deletedOrder[0].not_owner.cagnotte + deletedOrder[0].priceTot}, session)
        }
        if (type === 'lecteur') {
          const temp = myReadingsOrders.filter((order) => order.id !== commandeId)
          setMyReadingsOrders(temp)
          setOpenModal(false)
          setLoad(false)
        } else {
          const temp = myCollectionOrders.filter((order) => order.id !== commandeId)
          setMyCollectionOrders(temp)
          setOpenModal(false)
          setLoad(false)
        }
      })
    }})
  }



  return (
    <div>
      <Head>
        <title>Mes commandes</title>
      </Head>
      {openModal && (
        <Modal open={openModal} setOpen={setOpenModal} onClick={() => setOpenModal(false)}>
          <img src="/cuteCat.svg" alt="cute cat" className="cuteCat"/>
          <div className="sure">Êtes-vous sur ?</div>
          <div className="buttonsContainer">
            <a onClick={() => setOpenModal(false)}>
              <Button color="Transparent" >Annuler</Button>
            </a>
            <a onClick={() => {if (!load) {setLoad(true); openModalFunction.function();}}}>
              <Button color="White" >{load ? 'Confirmation...' : 'Confirmer'}</Button>
            </a>
          </div>
        </Modal>
        )}
      <div className="container">
        <h1 className="h1">Mes commandes</h1>
        <div className="ordersRow">
          <h3 className="selected">Locations Effectuées</h3>
          <Dropdown filters={['Mes lectures', 'Ma collection']} selectedItem={selectedCommandes} setSelectedItem={setSelectedCommandes} notifs={notifs}/>
        </div>
        <div className="commandesContainer">
        {/* {selectedCommandes === 0 && myReadingsOrders.map((commande) => {
            const range =  moment.range(commande.startDate, commande.endDate)
            const now = range.contains(moment())
            return (
              <div className="commande">
                <div className="left">
                  <img src={getStrapiMedia(commande.product.imageCover.url)} alt="" className="productImg"/>
                  <div className="middle">
                    <div className="up">
                      <div className="main">{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} 
                        <div className={`statut ${commande.status === 'draft' ? 'draft' : !commande.sendCollector ? 'later' : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'done' : 'later' :  moment(commande.endDate) > moment() ? 'now' : 'later' : 'later'}`} >
                          {commande.status === 'draft' ? (<><img src="/pending.svg" alt="icon pending" /> En attente de validation</>) : !commande.sendCollector ? (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'Terminée' : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</> :  moment(commande.endDate) > moment() ? <><img src="/enCours.svg" alt="icon pending" />Location en cours</> : (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</>}
                        </div>
                      </div>
                      <div className="ownerContainer">
                      {commande.owner.profilPic && (
                        <img src={commande.owner.profilPic.formats ? getStrapiMedia(commande.owner.profilPic.formats.thumbnail.url) : getStrapiMedia(commande.owner.profilPic.url)} alt="profil picture collectionneur"/> 
                      )}
                        <div><span>{commande.owner.username}</span>&nbsp; | {commande.owner.ville}  ({commande.owner.departement})</div>
                      </div>
                    </div>
                    <div className="down">
                      {(commande.owner.phone && commande.status !== 'draft') && (<p><span>Téléphone :</span> {commande.owner.phone}</p>)}
                      <p><span>Livraison :</span> {commande.delivery}</p>
                      <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                      <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                    </div>
                  </div>
                </div>
                <div className="middleRight">
                  <div className="down">
                    {(commande.owner.phone && commande.status !== 'draft') && (<p><span>Téléphone :</span> {commande.owner.phone}</p>)}
                    <p><span>Livraison :</span> {commande.delivery}</p>
                    <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                    <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                  </div>
                  <div className="underlineLink">Suivre ma commande</div>
                  <div className="">N° de location : {commande.id}</div>
                  <div className="">N° de suivi : {commande.id}</div>
                  <div className="buttonsContainer">
                    <a>
                      <Button color={'Transparent'} functionOnClick={() => {commande.status === 'draft' ? cancel(commande.id, 'lecteur') : null}}>{commande.status === 'draft' ? 'Annuler la commande' : now ? 'Réclamation' : moment(commande.endDate) > moment() ? 'Annuler la commande' : 'Signaler un problème'}</Button>
                    </a>
                    <a>
                      <Button color={'White'} functionOnClick={() => {commande.status === 'draft' ? null : !commande.sendCollector ? null : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? null : null : moment(commande.endDate) > moment() ? null : sent(commande.id, 'lecteur') : receive(commande.id, 'lecteur')}}>
                        {commande.status === 'draft' ? 'En attente de validation..' : !commande.sendCollector ? 'En attente de l\'envoi' : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'Laisser un avis' : 'En transit...' :  moment(commande.endDate) > moment() ? 'En location...' : 'Confirmer l\'envoi' : 'Confirmer réception'}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
          {selectedCommandes === 1 && myCollectionOrders.map((commande) => {
            const range =  moment.range(commande.startDate, commande.endDate)
            const now = range.contains(moment())
            return (
              <div className="commande">
                <div className="left">
                  <img src={getStrapiMedia(commande.product.imageCover.url)} alt="" className="productImg"/>
                  <div className="middle">
                    <div className="up">
                      <div className="main">{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} 
                        <div className={`statut ${commande.status === 'draft' ? 'draft' : !commande.sendCollector ? 'later' : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'done' : 'later' :  moment(commande.endDate) > moment() ? 'now' : 'later' : 'later'}`} >
                          {commande.status === 'draft' ? (<><img src="/pending.svg" alt="icon pending" /> En attente de validation</>) : !commande.sendCollector ? (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'Terminée' : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</> :  moment(commande.endDate) > moment() ? <><img src="/enCours.svg" alt="icon pending" />Location en cours</> : (<><img src="/pending.svg" alt="icon pending" />En attente de l’envoi</>) : <><img src="/pending.svg" alt="icon pending" />En cours de livraison</>}
                        </div>
                      </div>
                      <div className="ownerContainer">
                        {commande.not_owner.profilPic && (
                          <img src={commande.not_owner.profilPic.formats ? getStrapiMedia(commande.not_owner.profilPic.formats.thumbnail.url) : getStrapiMedia(commande.not_owner.profilPic.url)} alt="profil picture collectionneur"/> 
                        )}
                        <div className="fontSize12"><span>{commande.not_owner.username}</span>&nbsp; | {commande.not_owner.ville}  ({commande.not_owner.departement})</div>
                      </div>
                    </div>
                    <div className="down">
                      {(commande.not_owner.phone && commande.status !== 'draft') && (<p><span>Téléphone :</span> {commande.not_owner.phone}</p>)}
                      <p><span>Livraison :</span> {commande.delivery}</p>
                      <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                      <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                    </div>
                  </div>
                </div>
                <div className="middleRight">
                  <div className="down">
                    {(commande.not_owner.phone && commande.status !== 'draft') && (<p><span>Téléphone :</span> {commande.not_owner.phone}</p>)}
                    <p><span>Livraison :</span> {commande.delivery}</p>
                    <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                    <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                  </div>
                  <div className="underlineLink">Suivre ma commande</div>
                  <div className="">N° de location : {commande.id}</div>
                  <div className="">N° de suivi : {commande.id}</div>
                  <div className="buttonsContainer">
                    <a>
                      <Button color={'Transparent'} functionOnClick={() => {commande.status === 'draft' ? cancel(commande.id, 'collectionneur') : null}}>{commande.status === 'draft' ? 'Annuler la commande' : now ? 'Réclamation' : moment(commande.endDate) > moment() ? 'Annuler la commande' : 'Signaler un problème'}</Button>
                    </a>
                    <a>
                      <Button color={'White'} functionOnClick={() => {commande.status === 'draft' ? validate(commande.id) : !commande.sendCollector ? sent(commande.id, 'collectionneur') : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? null : receive(commande.id, 'collectionneur') :  moment(commande.endDate) > moment() ? null : null : null}}>
                        {commande.status === 'draft' ? 'Valider la commande' : !commande.sendCollector ? 'Confirmer l\'envoi' : commande.receiveReader ? commande.sendReader ? commande.receiveCollector ? 'Laisser un avis' : 'Confirmer réception' :  moment(commande.endDate) > moment() ? 'En location...' : 'En attente de l\'envoi' : 'En transit...'}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  );
};


export default Orders;
