import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getHomePage, getConnect } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getStrapiMedia } from "../utils/medias";
import { useEffect } from "react";
import {getProducts} from '../store'

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
        <img src={getStrapiMedia(home.slider[0].url)} alt="cover"/>
        <div className='hero'>
          <h1>{home.heroTitle}</h1>
          <p>{home.heroDescription}</p>
          <button>{home.heroCTA}</button>
        </div>
      </div>
      <h2>D'après vos dernières recherches</h2>
      <ProductsList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const home = await getHomePage();
  return { props: { home } };
}

export default HomePage;
