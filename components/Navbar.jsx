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
    if(e.keyCode === 13 && searchElement !== '') {
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
          <Link href="/">
            <a>
              <img
                src="/logo.png"
                alt="home"
                className="logo"
              />
            </a>
          </Link>
          {router.route !== "/search" &&
          <div className='search'>
            <img src="/search.png" alt="Search" />
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
                    S'inscrire / Se connecter
                  </Button>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="secondaryHeader">
        <a href="/" className="navElement">Tendances</a>
        <a href="/" className="navElement">Catégories</a>
        <a href="/landing" className="navElement">Comment ça marche ?</a>
        <a href="/" className="navElement">FAQ</a>
        <a href="/" className="navElement">A propos</a>
      </div>
    </div>
  );
};

export default Navbar;
