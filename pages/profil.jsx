/* eslint-disable prettier/prettier */
import Head from "next/head";
import ProductsList from "../components/ProductsList";
// import { getHomePage, getProducts, getMe } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {getMe, updateMe, logOut} from '../store'
import { useRouter } from "next/router";
import Dashboard from '../components/Dashboard'
import Params from '../components/Params'

const Profil = () => {

  const dispatch = useDispatch();
  const { info, products, session, user } = useSelector((state) => state);
  const router = useRouter()


  const [tabs, setTabs] = useState()

  useEffect(() => {
    dispatch(getMe(session))
  }, [])

  useEffect(() => {
    const {
      query: { tab }
    } = router
    if (tab) setTabs(tab);
    else setTabs('dashboard');
  }, [router])

  const disconnect = () => {
    router.push('/').then(() => {
      dispatch(logOut())
    })
  }

  return (
    <div>
      <Head>
        <title>Mon profil</title>
      </Head>
      <div className="headerProfil">
        <div className="onglets">
          <h3 className={tabs === 'params' ? 'selected' : ''} onClick={() => setTabs('params')}>Mes paramètres</h3>
          <h3 className={tabs === 'dashboard' ? 'selected' : ''} onClick={() => setTabs('dashboard')}>Tableau de bord</h3>
        </div>
      </div>
      <div className="container profilContainer">
        {tabs === 'params' ? (
          <Params user={user} logOut={disconnect}/>
          ) : (
          <Dashboard user={user} />
        )}
      </div>
    </div>
  );
};


export default Profil;
