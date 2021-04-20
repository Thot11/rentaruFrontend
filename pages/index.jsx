/* eslint-disable prettier/prettier */
import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getHomePage, getConnect } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getStrapiMedia } from "../utils/medias";
import { useEffect } from "react";
import {getProducts} from '../store'
import Link from "next/link";

const HomePage = ({ home }) => {

  const dispatch = useDispatch();
  const { info, products, session } = useSelector((state) => state);


  useEffect(() => {
    let token = localStorage.getItem('token')
    token = JSON.parse(token)
    if (token) dispatch({type: 'saveSession', payload: token})
    dispatch(getProducts())
  }, [])
  

  return (
    <div className='homeContainer'>
      <Head>
        <title>{home.title}</title>
      </Head>
      <div className='banner'>
        <img src={getStrapiMedia(home.slider[0].url)} alt="cover" className="cover" />
        <img src="/separation3.png" alt="background" className='substract'/>
        <div className='hero'>
          <h1>{home.heroTitle}</h1>
          <p>{home.heroDescription}</p>
          <Link href="/landing"><button>{home.heroCTA}</button></Link>
        </div>
      </div>
      <div className="container">
        <h2 className="h1">Lis les meilleurs mangas pas cher !</h2>
        <h3 className="h3">D'après vos dernières recherches</h3>
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const home = await getHomePage();
  return { props: { home } };
}

export default HomePage;
