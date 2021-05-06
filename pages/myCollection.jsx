import Head from "next/head";
import ProductsList from "../components/ProductsList";
// import { getHomePage, getProducts, getMe } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import CardProduct from '../components/CardProductCollection'
import { useEffect, useState } from "react";
import {getMe, updateMe} from '../store'
import Link from "next/link";

const MyCollection = () => {

  const dispatch = useDispatch();
  const { session, user } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMe(session))
  }, [])
  

  return (
    <div>
      <Head>
        <title>Ma collection</title>
      </Head>
      <div className="container collectionContainer">
        <h1 className="h1">Ma collection</h1>
        <div className="productsContainers collectionProductsContainer">
          <Link href="/create/product">
            <div className="createAnnonce">
              <span>+</span> 
            </div>
          </Link>
          {user.products && user.products.map((_product, key) => (
            <CardProduct product={_product} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default MyCollection;
