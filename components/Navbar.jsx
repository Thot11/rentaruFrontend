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

  
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    token = JSON.parse(token)
    if (token) {
      dispatch({type: 'saveSession', payload: token})
      dispatch(getMe(token))
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
          <div className='search'>
            <img src="/search.png" alt="Search" />
            <input placeholder="Rechercher un manga, un auteur, un genre" />
          </div>
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
                <Link href="/create/product">
                  <img src="/notif.svg" alt=""/>
                </Link>
                <Link href="/wishList">
                  <img src="/like2.svg" alt=""/>
                </Link>
                <Link href="/profil">
                  <img className="profilPic" src={getStrapiMedia(user.profilPic?.url)} alt="profil picture"/>

                </Link>
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
