/* eslint-disable prettier/prettier */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../store'
import { getMe } from '../store'


const Navbar = () => {

  const dispatch = useDispatch();
  const { session, user } = useSelector((state) => state);
  const router = useRouter()

  
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

  const disconnect = () => {
    router.push('/').then(() => {
      dispatch(logOut())
    })
  }
  
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
          {connected ? (
             <Link href="/profil">
             <button className="btnLogIn">
               {user.username}
             </button>
           </Link>
          ) : (
            <Link href="/login">
              <button className="btnLogIn">
                Inscription | Connexion
              </button>
            </Link>
          )}
          <button className="btnLogIn" onClick={disconnect}>Log Out</button>
          {connected ? (
             <Link href="/create/product">
              <button className="btnAd">
                  Créer une annonce
              </button>
           </Link>
          ) : (
            <Link href="/login">
              <button className="btnAd">
                Créer une annonce
              </button>
            </Link>
          )}
          <div className="help">
            ?
          </div>
        </div>        
      </div>
      <div className="secondaryHeader">
        <a href="/" className="navElement">Tendances</a>
        <a href="/" className="navElement">Catégories</a>
        <a href="/landing" className="navElement">Comment ça marche ?</a>
        <a href="/" className="navElement">A propos</a>
      </div>
    </div>
  );
};

export default Navbar;
