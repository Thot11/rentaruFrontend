/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {updateMe, updatePP} from '../store'

import Button from "../elements/Button";
import CheckBox from "../elements/CheckBox";
import DropDown from "../elements/DropDown";
import { getMangaCollection } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";


const Dashboard = ({ user, setTabs }) => {

  
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);

  const [handToHand, setHandToHand] = useState()
  const [relaiColis, setRelaiColis] = useState()
  const [phoneChecked, setPhoneChecked] = useState()
  const [mailChecked, setMailChecked] = useState()
  const [idChecked, setIdChecked] = useState()

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
          blabla
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
