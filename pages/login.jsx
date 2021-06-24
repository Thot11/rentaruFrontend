/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getQuotes } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";
import { postConnect, logOut } from "../store";
import Button from "../elements/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Mousewheel, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Mousewheel, Autoplay])

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { session, errorState } = useSelector((state) => state);
  const [quotes, setQuotes] = useState([])

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [windowWidth, setWindowWidth] = useState(1281);
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
  }, []);

  const updateSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    if (session) router.push("/");
  }, [session]);

  const connect = (mail, password) => {
     dispatch(postConnect(mail, password));
  };
  
  useEffect(() => {
    getQuotes().then((res) => {
      setQuotes(res);
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="loginContainer">
        <div className="leftContent">
          <h2>Renseignez vos identifiants</h2>
          <div className="loginWrapper">
            <h3>Connexion</h3>
            <input
              className="inputText"
              type="text"
              defaultValue={mail}
              placeholder='E-mail'
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              className="password inputText"
              type="password"
              placeholder='Mot de passe'
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorState.type === "connect" && (<p className="error">{errorState.message}</p>)}
            <div className="rememberMe">
              <p>Se souvenir de moi ?</p>
              <input type="checkbox"/>
            </div>
            <button className="btnUnderline">Mot de passe oublié ?</button>
            <div className="buttons">
              <Button color={'Red'} functionOnClick={() => connect(mail, password)}>Connexion</Button>
              <Link href={"/signUp"}>
                <a>
                  <Button color={'White'}>Inscription </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {windowWidth >= 700 && 
          <div className="rightContent">
            <div className="back">
              <img src="/headerBackground13@2x.png" alt="background" className='substract'/>
            </div>
            <div className="pancarteContainer">
              <svg className='pancarte' width="649" height="329" viewBox="0 0 649 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.933594" y="0" width="648" height="329" fill="black">
                  <rect fill="white" x="0.933594" width="648" height="329"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M638.081 160.419C640.159 157.045 640.049 152.763 637.8 149.5L554.75 29V30.7993C554.287 29.7401 553.23 29 552 29H97C96.1041 29 95.2998 29.3928 94.7501 30.0155V29.6321L11.6998 150.132C9.45126 153.395 9.34102 157.677 11.4187 161.051L94.7502 296.368V294.985C95.2999 295.607 96.1041 296 97 296H552C553.23 296 554.287 295.26 554.75 294.201V295.736L638.081 160.419Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M638.081 160.419C640.159 157.045 640.049 152.763 637.8 149.5L554.75 29V30.7993C554.287 29.7401 553.23 29 552 29H97C96.1041 29 95.2998 29.3928 94.7501 30.0155V29.6321L11.6998 150.132C9.45126 153.395 9.34102 157.677 11.4187 161.051L94.7502 296.368V294.985C95.2999 295.607 96.1041 296 97 296H552C553.23 296 554.287 295.26 554.75 294.201V295.736L638.081 160.419Z" fill="#171F25"/>
                <path d="M637.8 149.5L630.39 154.608L630.39 154.608L637.8 149.5ZM638.081 160.419L630.418 155.699L630.418 155.7L638.081 160.419ZM554.75 29L562.161 23.8926L545.75 0.0822124V29H554.75ZM554.75 30.7993L546.504 34.4046L563.75 30.7993H554.75ZM94.7501 30.0155H85.7501V53.8106L101.497 35.9715L94.7501 30.0155ZM94.7501 29.6321H103.75V0.714296L87.3397 24.5247L94.7501 29.6321ZM11.6998 150.132L19.1102 155.24H19.1102L11.6998 150.132ZM11.4187 161.051L3.75526 165.77H3.75527L11.4187 161.051ZM94.7502 296.368L87.0867 301.087L103.75 328.146V296.368H94.7502ZM94.7502 294.985L101.497 289.028L85.7502 271.19V294.985H94.7502ZM554.75 294.201H563.75L546.504 290.595L554.75 294.201ZM554.75 295.736H545.75V327.514L562.414 300.455L554.75 295.736ZM630.39 154.608C630.615 154.934 630.626 155.362 630.418 155.699L645.745 165.138C649.693 158.728 649.483 150.592 645.211 144.393L630.39 154.608ZM547.34 34.1074L630.39 154.608L645.211 144.393L562.161 23.8926L547.34 34.1074ZM563.75 30.7993V29H545.75V30.7993H563.75ZM552 38C549.526 38 547.422 36.5044 546.504 34.4046L562.996 27.1939C561.152 22.9759 556.934 20 552 20V38ZM97 38H552V20H97V38ZM101.497 35.9715C100.411 37.2021 98.7932 38 97 38V20C93.415 20 90.1885 21.5834 88.0029 24.0594L101.497 35.9715ZM103.75 30.0155V29.6321H85.7501V30.0155H103.75ZM87.3397 24.5247L4.28933 145.025L19.1102 155.24L102.161 34.7395L87.3397 24.5247ZM4.28933 145.025C0.0171509 151.224 -0.192296 159.36 3.75526 165.77L19.0821 156.332C18.8743 155.994 18.8854 155.566 19.1102 155.24L4.28933 145.025ZM3.75527 165.77L87.0867 301.087L102.414 291.649L19.0821 156.332L3.75527 165.77ZM103.75 296.368V294.985H85.7502V296.368H103.75ZM97 287C98.7931 287 100.411 287.798 101.497 289.028L88.003 300.941C90.1887 303.417 93.4151 305 97 305V287ZM552 287H97V305H552V287ZM546.504 290.595C547.422 288.496 549.526 287 552 287V305C556.933 305 561.152 302.024 562.996 297.806L546.504 290.595ZM563.75 295.736V294.201H545.75V295.736H563.75ZM630.418 155.7L547.087 291.017L562.414 300.455L645.745 165.138L630.418 155.7Z" fill="#1C252E" mask="url(#path-1-outside-1)"/>
              </svg>
              <div className="quoteContainer">
                <Swiper
                  freeMode={false}
                  mousewheel={{invert:true, forceToAxis: true}}
                  slidesPerView={1}
                  spaceBetween={50}                
                  autoplay={{delay: 5000}}
                  // onSlideChange={() => console.log('')}
                  // onSwiper={(swiper) => console.log('')}
                >
                  {quotes.map((quote, key) => {
                    return (
                      <SwiperSlide>
                          <div className="quote">
                            <p className='quoteIcon'>“</p>
                            <p className="quoteText">
                              {quote.quote.citationText}
                            </p>
            
                          </div>
                          <div className="customerInfo">
                            <img className="userPicture" src={getStrapiMedia(quote.quote.citationUserPicture.url)} alt="userPicture"/>
                            <p className="userName">{quote.quote.citationUser}</p>
                          </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
            <svg className='pancarteFoot' width="51" height="470" viewBox="0 0 51 470" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 21C0 9.40201 9.40202 0 21 0H30C41.598 0 51 9.40202 51 21V470H0V21Z" fill="#171F25"/>
            </svg>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;
