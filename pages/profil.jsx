/* eslint-disable prettier/prettier */
import Head from "next/head";
import ProductsList from "../components/ProductsList";
// import { getHomePage, getProducts, getMe } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {getMe, updateMe, logOut} from '../store'
import { useRouter } from "next/router";

const Profil = () => {

  const dispatch = useDispatch();
  const { info, products, session, user } = useSelector((state) => state);
  const router = useRouter()

  const [editMode, setEditMode] = useState(false)

  const [username, setUsername] = useState(user.username);

  useEffect(() => {
    dispatch(getMe(session))
  }, [])

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
      <button className="btnLogIn" onClick={disconnect}>Log Out</button>
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
      <ProductsList products={user.products} user={user}/>
    </div>
  );
};


export default Profil;
