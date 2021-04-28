/* eslint-disable prettier/prettier */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../store'
import { getMe } from '../store'
import { getStrapiMedia } from "../utils/medias";
import Button from '../elements/Button'

const Navbar = () => {

  const dispatch = useDispatch();
  const { session, user } = useSelector((state) => state);
  const router = useRouter()
  
  const [connected, setConnected] = useState(false)
  const [searchElement, setSearchElement] = useState('');
  const [keyDown, setKeyDown] = useState(0);

  const [contextOpenMobile, setContextOpenMobile] = useState(false)

  const [openBurger, setOpenBurger] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    token = JSON.parse(token)
    if (token) {
      dispatch({type: 'saveSession', payload: token})
      dispatch(getMe(token))
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
    
  }, [])
  
  useEffect(() => {
    if (session) {
      setConnected(true)
      localStorage.setItem('token', JSON.stringify(session));
    } else {
      setConnected(false)
      localStorage.setItem('token', JSON.stringify(''));
    }
  }, [session])

  const disconnect = () => {
    router.push('/').then(() => {
      dispatch(logOut())
    })
  }

  const handleKeyDown = (e) => { 
    if(e.keyCode === 13) {
      setKeyDown(13);
    }
  }

  useEffect(() => {
    if(keyDown === 13 && searchElement !== '' && router.route !== "/search") {
      setKeyDown(0);
      router.push({ pathname: "/search", query: { title: searchElement } })
    }
  }, [keyDown, searchElement, router])
  
  return (
    <div className="navbarContainer">
      <div className="mainHeader">
        <div className="mainWrapper">
          <img src="/searchMobile.svg" alt="search mobile" className="searchMobile" onClick={() => setOpenBurger(true)}/>
          <Link href="/">
            <a onClick={() => setOpenBurger(false)}>
              <img
                src="/logo.svg"
                alt="home"
                className="logo"
              />
            </a>
          </Link>
          {router.route !== "/search" &&
          <div className='search'>
            <img src="/search.svg" alt="Search" />
            <input placeholder="Rechercher un manga, un auteur, un genre" value={searchElement} onChange={(e) => setSearchElement(e.target.value)} />
          </div>}
          <div className="right">
            {connected ? (
              <>
                <Link href="/create/product">
                  <a>
                    <Button color="Red">
                        Déposer une annonce
                    </Button>
                  </a>
                </Link>
                <Link href="/create/product">
                  <img src="/message.svg" alt=""/>
                </Link>
                <Link href={{ pathname: "/profil", query: { tab: "params" } }}>
                  <img src="/notif.svg" alt=""/>
                </Link>
                <Link href="/wishList">
                  <img src="/like2.svg" alt=""/>
                </Link>
                <div className="containerContextMenu">
                  <div className="openContext">
                    <Link href={{ pathname: "/profil", query: { tab: "dashboard" } }}>
                      <img className="profilPic" src={getStrapiMedia(user.profilPic?.url)} alt="profil picture"/>
                    </Link>
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.93317 5.25C3.74072 5.58333 3.2596 5.58333 3.06715 5.25L0.902085 1.5C0.709635 1.16667 0.950198 0.75 1.3351 0.75H5.66522C6.05012 0.75 6.29069 1.16667 6.09824 1.5L3.93317 5.25Z" fill="#ECECEC" fill-opacity="0.6"/>
                    </svg>
                  </div>
                  <div className={`contextMenu`}>
                    <Link href={{ pathname: "/profil", query: { tab: "dashboard" } }}>
                      <a className="navElement"><p>Mon profil</p></a>
                    </Link>
                    <Link href={{ pathname: "/profil", query: { tab: "params" } }}>
                      <a className="navElement"><p>Paramètres</p></a>
                    </Link>
                    <a href="/landing" className="navElement"><p>Mes commandes</p></a>
                    <a href="/" className="navElement" onClick={disconnect}><p>Déconnexion</p></a>
                  </div>
                </div>
              </>
            ) : (
              <Link href="/login">
                <a>
                  <Button color="Red">
                    Inscription | Connexion
                  </Button>
                </a>
              </Link>
            )}
          </div>
          <div className={`burger ${openBurger ? 'open' : 'close'}`} onClick={() => setOpenBurger(!openBurger)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className={`subHeaderMobile ${openBurger ? 'open' : 'close'}`}>
        <div className="searchBar">
          <img src="/search.svg" alt="Search" />
          <input placeholder="Rechercher un manga, un auteur, un genre" value={searchElement} onChange={(e) => setSearchElement(e.target.value)} />
        </div>
        {connected ? (
          <>
          <Link href="/create/product">
            <a onClick={() => setOpenBurger(!openBurger)}>
              <Button color="Red">
                  Déposer une annonce
              </Button>
            </a>
          </Link>
          <div className="subTitle">Profil</div>
          <div className="containerContextMenu">
            <div className="openContext">
              <Link href={{ pathname: "/profil", query: { tab: "dashboard" } }}>
                <a onClick={() => setOpenBurger(!openBurger)}>
                  <img className="profilPic" src={getStrapiMedia(user.profilPic?.url)} alt="profil picture"/>
                  Mon profil
                </a>
              </Link>
              <div className={`dropdown ${contextOpenMobile ? 'open' : ''}`} onClick={() => setContextOpenMobile(!contextOpenMobile)} >
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.93317 5.25C3.74072 5.58333 3.2596 5.58333 3.06715 5.25L0.902085 1.5C0.709635 1.16667 0.950198 0.75 1.3351 0.75H5.66522C6.05012 0.75 6.29069 1.16667 6.09824 1.5L3.93317 5.25Z" fill="#ECECEC" fill-opacity="0.6"/>
                </svg>
              </div>
            </div>
            <div className={`contextMenu ${contextOpenMobile ? 'open' : ''}`}>
              <Link href={{ pathname: "/profil", query: { tab: "dashboard" } }}>
                <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}><p>Mon profil</p></a>
              </Link>
              <Link href={{ pathname: "/profil", query: { tab: "params" } }}>
                <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}><p>Paramètres</p></a>
              </Link>
              <a href="/landing" className="elementMobile"><p>Mes commandes</p></a>
              <a href="/" className="elementMobile" onClick={() => {disconnect(); setOpenBurger(!openBurger);}}><p>Déconnexion</p></a>
            </div>
          </div>
          <Link href={"/"}>
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)} >
              <img src="/notif.svg" alt=""/>
              Notifications
            </a>
          </Link>
          <Link href="/wishList">
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}>
             <img src="/like2.svg" alt=""/>
             Page favoris
            </a>
          </Link>
        </>
        ) : (
          <>
            <Link href="/login">
              <a onClick={() => setOpenBurger(!openBurger)}>
                <Button color="Red">
                  Inscription | Connexion
                </Button>
              </a>
            </Link>
            <Link href="/landing">
              <a onClick={() => setOpenBurger(!openBurger)}>
                <Button color="White">
                  Comment ça marche ?
                </Button>
              </a>
            </Link>
          </>
        )}
        <div className="subTitle subTitle2">Menu</div>
          <Link href={"/trending"}>
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)} >
              Tendances
            </a>
          </Link>
          <Link href={"/"}>
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}>
              Catégories
            </a>
          </Link>
          <Link href="/landing">
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}>
              Comment ça marche ? 
            </a>
          </Link>
          <Link href="/becomeCollector">
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}>
              Deviens collectionneur
            </a>
          </Link>
          <Link href="/FAQ">
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}>
              FAQ
            </a>
          </Link>
          <Link href="/about">
            <a className="elementMobile" onClick={() => setOpenBurger(!openBurger)}>
              À propos
            </a>
          </Link>
      </div>
      <div className="secondaryHeader">
        <a href="/trending" className="navElement">Tendances</a>
        <a href="/" className="navElement">Catégories</a>
        <a href="/landing" className="navElement">Comment ça marche ?</a>
        <a href="/becomeCollector" className="navElement">Deviens Collectionneur</a>
        <a href="/FAQ" className="navElement">FAQ</a>
        <a href="/about" className="navElement">A propos</a>
      </div>
    </div>
  );
};

export default Navbar;
