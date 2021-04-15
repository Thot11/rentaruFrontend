/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
import { getMangaCollection } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";


const Params = ({ user }) => {

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
    </>
  );
};

export default Params;
