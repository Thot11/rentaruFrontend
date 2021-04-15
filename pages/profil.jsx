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
  console.log(user);

  const [editMode, setEditMode] = useState(false)
  const [tabs, setTabs] = useState()
  const [username, setUsername] = useState(user.username);

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
  
  const updateInfo = () => {
    const data = {
      username
    }
    dispatch(updateMe(data, session))
  }

  return (
    <div>
      <Head>
        <title>me</title>
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
        {/* <button className="btnLogIn" onClick={disconnect}>Log Out</button>
        <div className="edit" onClick={() => setEditMode(!editMode)}>Toggle edit mode</div>
        <div>me : {user.username}</div>
        <div>mail : {user.email} </div>
        <div>note : {user.note} </div>
        <div>nb annonces : {user.products.length} </div>
        {editMode && (
          <div className="signInContainer">
          <div>Edit mode : </div>
          change username
          <input type="text" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
          <div onClick={updateInfo}>Submit</div>
        </div>
        )}
        <ProductsList products={user.products} user={user}/> */}
      </div>
    </div>
  );
};


export default Profil;
