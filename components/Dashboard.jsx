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
    if (user.commande && user.commandes.length > 0) {
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
      <div className="topContainer">
        <div className="left">
          <img src={getStrapiMedia(user.profilPic?.url)} alt="profilPic"/>
          <div className="hello">
              <div className="mainText"> Bonjour {user.username}</div>
              <p className="link" onClick={() => setTabs('params')}>Modifier votre profil <img src="/chevronLink.svg" /></p>
              <p className="link" >Voir ma collection <img src="/chevronLink.svg" /></p>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div>Votre Grade</div>
            <a><p>Comment marche les grades ?</p> <img src="/chevronLink.svg" /> </a>
          </div>
          <div className="middle">
            <img src="/chuninBadge.svg" alt=""/>
            <img src="/senpaiBadge.svg" alt=""/>
            <img src="/wakaSensei.svg" alt=""/>
            <img src="/senseiBadge.svg" alt=""/>
            <img src="/gsenseiBadge.svg" alt=""/>
          </div>
          <div className="bot">
            <div className="subLine" />
            <div className="progression" style={{width: '60%'}}/>
          </div>
        </div>
      </div>
      <div className="middleContainer">
        <div className="left">
          <div className="top">
            <div className="title">Préférences</div>
            <div className="prefLivraison">
              <div>
                <img src="/hand-shake1.svg" alt=""/>
                <p>Remise en main propre</p>
              </div>
              <CheckBox checked={handToHand} setChecked={setHandToHand} info={true} resetInfo={false}/>
            </div>
            <div className="prefLivraison">
              <div>
                <img src="/cardboard.svg" alt=""/>
                <p>Déposer en relai colis</p>
              </div>
              <CheckBox checked={relaiColis} setChecked={setRelaiColis} info={true} resetInfo={false}/>
            </div>
          </div>
          <div className="middle">
            <div className="title">Vérification</div>
            <Verification checked={idChecked} checkedText={'Id vérifié'} notCheckedText={'Faire vérifier un id'} input={false} />
            <Verification checked={phoneChecked} checkedText={'Téléphone vérifié'} notCheckedText={'Faire vérifier un numéro'} input={false} />
            <Verification checked={mailChecked} checkedText={'Mail vérifié'} notCheckedText={'Faire vérifier un mail'} input={false} />
            <p className="link" onClick={() => setTabs('params')}>Compléter les vérifications <img src="/chevronLink.svg" /></p>
          </div>
          <div className="bot">
            <div className="title">Activité</div>
            <div className="rewards">
              <div className="cardReward">
                <img src="/book.svg" alt="book"/>
                <div className="infoReward">
                  <p className='number'>{ user && user.products?.length}</p>
                  <p className='title'>Série{user && user.products?.length > 1 ? 's' : ''} de manga mise{user && user.products?.length > 1 ? 'nt' : ''} en location</p>
                </div>
              </div>
              <div className="cardReward">
                <img src="/transaction.svg" alt="transaction"/>
                <div className="infoReward">
                  <p className='number'>4</p>
                  <p className='title'>Transactions réalisés</p>
                </div>
              </div>
              <div className="cardReward">
                <img src="/clock.svg" alt="transaction"/>
                <div className="infoReward">
                  <p className='number'>{memberSince}</p>
                  <p className='title'>Jour{memberSince > 1 ? 's' : ''} d'ancienneté</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <img src={commande.product.imageCover.formats.thumbnail.url} alt=""/>
                  <div className="middle">
                    <div className="up">
                      <div>{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} <div className={`statut ${now ? 'now' : moment(commande.endDate) > moment() ? 'later' : 'done'}`} >{now ? 'En cours' : moment(commande.endDate) > moment() ? 'À venir' : 'Terminée'}</div></div>
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
                  <img src={commande.product.imageCover.formats.thumbnail.url} alt=""/>
                  <div className="middle">
                    <div className="up">
                      <div>{commande.product.title} | Tome {commande.product.tomeInitial} à {commande.product.tomeFinal} <div className={`statut ${now ? 'now' : moment(commande.endDate) > moment() ? 'later' : 'done'}`} >{now ? 'En cours' : moment(commande.endDate) > moment() ? 'À venir' : 'Terminée'}</div></div>
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
