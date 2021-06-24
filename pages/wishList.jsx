import Head from "next/head";
import ProductsList from "../components/ProductsList";
// import { getHomePage, getProducts, getMe } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {getMe, updateMe} from '../store'

const WishList = () => {

  const dispatch = useDispatch();
  const { session, user } = useSelector((state) => state);

  const [mangaList, setMangaList] = useState([])

  useEffect(() => {
    dispatch(getMe(session))
  }, [])
  

  console.log(user.likes);
  return (
    <div>
      <Head>
        <title>My wishlist</title>
      </Head>
      <div className="container wishListContainer">
        <h1 className="h1">Ma liste de souhaits</h1>
        {user.likes ? (
          <ProductsList products={user.likes}/>
          ) : (
            <p>Looks empty sry bb</p>
          )}
      </div>
    </div>
  );
};


export default WishList;
