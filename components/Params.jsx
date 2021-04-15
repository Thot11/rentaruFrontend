/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
import Button from "../elements/Button";
import CheckBox from "../elements/CheckBox";
import { getMangaCollection } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";


const Params = ({ user }) => {

  const [handToHand, setHandToHand] = useState(true)
  const [relaiColis, setRelaiColis] = useState(false)
  const [phoneChecked, setPhoneChecked] = useState()
  const [mailChecked, setMailChecked] = useState('otaku77@yahoo.fr')
  const [idChecked, setIdChecked] = useState()
  const [description, setDescription] = useState()
  const [changeDescription, setChangeDescription] = useState(false)
  const [changeDocuments, setChangeDocuments] = useState(false)

  useEffect(() => {
    setPhoneChecked(user.phone)
    setMailChecked(user.email)
    setDescription(user.description)
  }, [user])


  return (
    <>
      <div className="topContainer">
        <div className="left">
          <img src={getStrapiMedia(user.profilPic?.url)} alt="profilPic"/>
          <div className="hello">
              <div className="offSet" />
              <div className="mainText"> Bonjour {user.username}</div>
              <div className="subText">Changer photo de profil</div>
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
            <Verification checked={phoneChecked} checkedText={phoneChecked} notCheckedText={'Faire vérifier un numéro'} input={false} />
            <Verification checked={mailChecked} checkedText={mailChecked} notCheckedText={'Faire vérifier un mail'} input={false} />
            <p className="link">Compléter les vérifications <img src="/chevronLink.svg" /></p>
          </div>
          <div className="bot">
          <div className="title">Mon top 5</div>
          </div>
        </div>
        <div className="right">
          <div className="firstSection">
            <div className="top" onClick={() => setChangeDescription(true)}>Modifier ma description</div>
            <textarea className={changeDescription ? 'change' : ''} name="" id=""  readOnly={changeDescription ? false : true} defaultValue={description} onChange={(e) => setDescription(e.target.value)} placeholder={"Présente toi en quelques mots..."} />
            {changeDescription && <Button color='Red' functionOnClick={() => setChangeDescription(false)}>Enregistrer</Button>}
          </div>
          <div className="secondSection">
            <div className="top" onClick={() => setChangeDocuments(true)}>Modifier mes documents</div>
            <Verification checked={idChecked} checkedText={idChecked} notCheckedText={'Faire vérifier un id'} input={changeDocuments} changeInput={setIdChecked}/>
            <Verification checked={phoneChecked} checkedText={phoneChecked} notCheckedText={'Faire vérifier un numéro'} input={changeDocuments} changeInput={setPhoneChecked}/>
            <Verification checked={mailChecked} checkedText={mailChecked} notCheckedText={'Faire vérifier un mail'} input={changeDocuments} changeInput={setMailChecked}/>
            {changeDocuments && <Button color='Red' functionOnClick={() => setChangeDocuments(false)}>Enregistrer</Button>}
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

export default Params;
