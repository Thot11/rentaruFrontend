/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {updateMe, updatePP} from '../store'

import Button from "../elements/Button";
import CheckBox from "../elements/CheckBox";
import DropDown from "../elements/DropDown";
import { getMangaCollection } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";


const Params = ({ user, logOut }) => {

  
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);

  const [handToHand, setHandToHand] = useState()
  const [relaiColis, setRelaiColis] = useState()
  const [phoneChecked, setPhoneChecked] = useState()
  const [mailChecked, setMailChecked] = useState()
  const [idChecked, setIdChecked] = useState()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState()
  const [address, setAddress] = useState()
  const [department, setDepartment] = useState()
  const [ville, setVille] = useState()
  const [description, setDescription] = useState()
  const [changeDescription, setChangeDescription] = useState(false)
  const [changeDocuments, setChangeDocuments] = useState(false)
  
  const [windowWidth, setWindowWidth] = useState(1281);  

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
  }, []);

  const updateSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setPhoneChecked(user.phone)
    setMailChecked(user.email)
    setDescription(user.description)
    setAddress(user.address)
    setVille(user.ville)
    setDepartment(user.departement)
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

  const updateProfilPic = (selectedFile) => {
    const img = new FormData();
    img.append('files', selectedFile);
    img.append('refId', user.id);
    img.append('ref', 'user');
    img.append('source', 'users-permissions');
    img.append('field', 'profilPic');
    dispatch(updatePP(img, user, session))
  }

  return (
    <>
      <div className="topContainer">
        <div className="left">
          {user.profilPic ? (
              <img src={getStrapiMedia(user.profilPic?.url)} alt="profilPic"/>
            ) : (
              <div className="emptyProfilPic">{user.username?.charAt(0)}</div>
            )}
          <div className="hello">
              <input
                type="file"
                id="pp"
                onChange={(e) => {updateProfilPic(e.target.files[0])}}
              />
              <div className="offSet" />
              <div className="mainText"> Bonjour {user.username}</div>
              <label className="subText" htmlFor="pp">Changer photo de profil</label>
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
                <p>Envoi postal</p>
              </div>
              <CheckBox checked={relaiColis} setChecked={setRelaiColis} info={true} resetInfo={false}/>
            </div>
          </div>
          <div className="middle">
            <div className="title">Vérification</div>
            <Verification checked={idChecked} checkedText={'Id vérifié'} notCheckedText={'Faire vérifier un id'} input={false} />
            <Verification checked={phoneChecked} checkedText={'Téléphone vérifié'} notCheckedText={'Faire vérifier un numéro'} input={false} />
            <Verification checked={mailChecked} checkedText={'Mail vérifié'} notCheckedText={'Faire vérifier un mail'} input={false} />
            <p className="link" onClick={() => setChangeDocuments(true)}>Compléter les vérifications <img src="/chevronLink.svg" /></p>
          </div>
          <div className="bot">
          <div className="title">Mon top 5</div>
          </div>
        </div>
        <div className="right">
          <div className="firstSection">
            {windowWidth < 700 ? 
              <div className="top"> 
                <div className="title">Description</div>
                <div className="editBtn" onClick={() => setChangeDescription(true)}>Modifier ma description</div>
              </div>
            :
              <div className="top" onClick={() => setChangeDescription(true)}>Modifier ma description</div>
            }
            <textarea className={changeDescription ? 'change' : ''} name="" id=""  readOnly={changeDescription ? false : true} defaultValue={description} onChange={(e) => setDescription(e.target.value)} placeholder={"Présente toi en quelques mots..."} />
            {changeDescription && <Button color='Red' functionOnClick={() => {updateInfo({description}); setChangeDescription(false)}}>Enregistrer</Button>}
          </div>
          <div className="secondSection">
            {windowWidth < 700 ? 
              <div className="top">
                <div className="title">Vérification</div>
                <div className="editBtn" onClick={() => setChangeDocuments(true)}>Modifier mes documents</div>
              </div>
            :
            <div className="top" onClick={() => setChangeDocuments(true)}>Modifier mes documents</div>
            }
            <Verification checked={idChecked} checkedText={idChecked} notCheckedText={'Faire vérifier un id'} input={changeDocuments} changeInput={setIdChecked} index={1}/>
            <Verification checked={phoneChecked} checkedText={phoneChecked} notCheckedText={'Faire vérifier un numéro'} input={changeDocuments} changeInput={setPhoneChecked}/>
            <Verification checked={mailChecked} checkedText={mailChecked} notCheckedText={'Faire vérifier un mail'} input={changeDocuments} changeInput={setMailChecked}/>
            {changeDocuments && <Button color='Red' functionOnClick={() => {updateInfo({phone: phoneChecked, email: mailChecked}); setChangeDocuments(false)}}>Enregistrer</Button>}
          </div>
          <div className="thirdSection">
            <h4>Votre compte</h4>
            <DropDown title="Mot de passe" color="Primary">
              <div className="row">
                <div className="inputContainer">
                  <label htmlFor="password">Nouveau mot de passe</label>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} id="password"/>
                </div>
                <div className="inputContainer">
                  <label htmlFor="confirm">Confirmer le nouveau mot de passe</label>
                  <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} id="confirm" className={`${password === confirmPassword && password.length > 0 ? 'check' : 'notCheck'}`} />
                </div>
              </div>
              <Button color='Red' functionOnClick={() => {if (password === confirmPassword && password.length > 0) updateInfo({password})}}>Enregistrer</Button>
            </DropDown>
            <DropDown title="Adresse postale" color="dark">
              <div className="row">
                  <div className="inputContainer">
                    <label htmlFor="address">Adresse</label>
                    <input type="text" defaultValue={address} onChange={(e) => setAddress(e.target.value)} id="address"/>
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="departement">Departement</label>
                    <input type="number" defaultValue={department} onChange={(e) => setDepartment(e.target.value)} id="departement" />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="ville">Ville</label>
                    <input type="text" defaultValue={ville} onChange={(e) => setVille(e.target.value)} id="ville" />
                  </div>
                </div>
                <Button color='Red' functionOnClick={() => {updateInfo({ville, address, departement : department.toString()})}}>Enregistrer</Button>
            </DropDown>
            <h4>Détail du paiement</h4>
            <DropDown title="Ajouter une carte" color="Primary">
            <div className="card">
                <input type="text" placeholder='Numéro de carte 🔒' className='cardNumber' />
                <div className="cardMore">
                  <input type="text" placeholder='Expiration' className='cardExpiration'/>
                  <input type="text" placeholder='Cryptogramme' className='cardCrypto'/>
                </div>
              </div>
              <input type="text" placeholder='Code Postal' className="postalCode"/>
              <input type="text" placeholder='Pays/région' className="country"/>
              <button className='button buttonRed'>Enregistrer</button>
            </DropDown>
            <h4>Méthode de versement</h4>
            <DropDown title="Ajouter un compte" color="Primary">blabla</DropDown>
            <div className="logOut" onClick={() => logOut()}>Deconnexion</div>
            <div className="deleteAccount">Fermer mon compte</div>
          </div>
        </div>
      </div>
    </>
  );
};


const Verification = ({checked, checkedText, notCheckedText, input, changeInput, index}) => {

  return (
    <div className={index ? "verif verif1" : 'verif'}>
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

export default Params;
