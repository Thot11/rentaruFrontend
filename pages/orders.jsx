/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useSelector, useDispatch } from 'react-redux';
import Link from "next/link";
import Button from "../elements/Button";
import { getCguPage } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";

import Dropdown from "../components/dropdown"

import { getMyCollectionsOrders, getMyReadings } from "../utils/api";
import { useEffect, useState } from "react";

import Moment from 'moment';
import 'moment/locale/fr'
import { extendMoment } from 'moment-range';

const Orders = ({}) => {

  const moment = extendMoment(Moment);

  const { session, user } = useSelector((state) => state);

  const [selectedCommandes, setSelectedCommandes] = useState(0)
  const [myCollectionOrders, setMyCollectionOrders] = useState([])
  const [myReadingsOrders, setMyReadingsOrders] = useState([])

  useEffect(() => {
    if (session) {
      getMyCollectionsOrders(user.id, session).then(resp => {
        if (resp) {
          setMyCollectionOrders(resp);
        }
      });
      getMyReadings(user.id, session).then(resp => {
        if (resp) {
          setMyReadingsOrders(resp);
        }
      });
    }
  }, [user])

  return (
    <div>
      <Head>
        <title>Mes commandes</title>
      </Head>
      <div className="container">
        <h1 className="h1">Mes commandes</h1>
        <div className="ordersRow">
          <h3 className="selected">Locations Effectuées</h3>
          <Dropdown filters={['Mes lectures', 'Ma collection']} selectedItem={selectedCommandes} setSelectedItem={setSelectedCommandes} />
        </div>
        <div className="commandesContainer">
        {selectedCommandes === 0 && myReadingsOrders.map((commande) => {
            const range =  moment.range(commande.startDate, commande.endDate)
            const now = range.contains(moment())
            return (
              <div className="commande">
                <div className="left">
                  <img src={commande.product.imageCover.url} alt="" className="productImg"/>
                  <div className="middle">
                    <div className="up">
                      <div className="main">{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} <div className={`statut ${now ? 'now' : moment(commande.endDate) > moment() ? 'later' : 'done'}`} >{now ? 'En cours' : moment(commande.endDate) > moment() ? 'À venir' : 'Terminée'}</div></div>
                      <div className="ownerContainer">
                        <img src={commande.owner.profilPic.formats.thumbnail.url} alt="profil picture collectionneur"/> 
                        <div><span>{commande.owner.username}</span>&nbsp; | {commande.owner.ville}  ({commande.owner.departement})</div>
                      </div>
                    </div>
                    <div className="down">
                      <p><span>Livraison :</span> {commande.delivery}</p>
                      <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                      <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                    </div>
                  </div>
                </div>
                <div className="middleRight">
                  <div className="underlineLink">Suivre ma commande</div>
                  <div className="">N° de location : {commande.id}</div>
                  <div className="">N° de suivi : {commande.id}</div>
                  <div className="buttonsContainer">
                    <Link href={"/"}>
                      <a>
                        <Button color={'Transparent'}>{now ? 'Réclamation' : moment(commande.endDate) > moment() ? 'Annuler la commande' : 'Signaler un problème'}</Button>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Button color={'White'}>{now ? 'Envoyer un message' : moment(commande.endDate) > moment() ? 'Envoyer un message' : 'Laisser un avis'}</Button>
                      </a>   
                    </Link>
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
                  <img src={commande.product.imageCover.url} alt="" className="productImg"/>
                  <div className="middle">
                    <div className="up">
                      <div className="main">{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} <div className={`statut ${now ? 'now' : moment(commande.endDate) > moment() ? 'later' : 'done'}`} >{now ? 'En cours' : moment(commande.endDate) > moment() ? 'À venir' : 'Terminée'}</div></div>
                      <div className="ownerContainer">
                        <img src={commande.not_owner.profilPic.formats.thumbnail.url} alt="profil picture collectionneur"/> 
                        <div><span>{commande.not_owner.username}</span>&nbsp; | {commande.not_owner.ville}  ({commande.not_owner.departement})</div>
                      </div>
                    </div>
                    <div className="down">
                      <p><span>Livraison :</span> {commande.delivery}</p>
                      <p><span>Prix :</span> {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(commande.priceTot)}</p>
                      <p><span>Dates :</span> {moment(commande.startDate).format('Do MMMM')}-{moment(commande.endDate).format('Do MMMM')}</p>
                    </div>
                  </div>
                </div>
                <div className="middleRight">
                  <div className="underlineLink">Suivre ma commande</div>
                  <div className="">N° de location : {commande.id}</div>
                  <div className="">N° de suivi : {commande.id}</div>
                  <div className="buttonsContainer">
                    <Link href={"/"}>
                      <a>
                        <Button color={'Transparent'}>Annuler la commande</Button>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Button color={'White'}>Envoyer un message</Button>
                      </a>   
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};


export default Orders;
