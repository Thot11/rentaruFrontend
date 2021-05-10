/* eslint-disable prettier/prettier */
import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getHomePage, getConnect } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getStrapiMedia } from "../utils/medias";
import { useEffect, useState } from "react";
import {getProducts, resetCreateProduct} from '../store'
import Link from "next/link";
import Modal from "../components/Modal"
import { useRouter } from "next/router";
import Button from "../elements/Button"

const HomePage = ({ home }) => {

  const router = useRouter();

  const dispatch = useDispatch();
  const { info, products, session, createdProduct } = useSelector((state) => state);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (createdProduct.slug) {
      setOpenModal(true);
    }
  }, [createdProduct])

  const resetProduct = () => {
    dispatch(resetCreateProduct())
  }


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
      {openModal && (<Modal open={openModal} setOpen={setOpenModal} onClick={() => resetProduct()}>
        <img src="/cuteCat.svg" alt="cute cat" className="cuteCat"/>
        <div className="sure">Votre annonce est en ligne. <br />
          À très bento !</div>
        <div className="buttonsContainer">
          <Link href={`/products/${createdProduct.slug}`}>
            <a onClick={() => resetProduct()}>
              <Button color="Transparent" >Voir mon produit</Button>
            </a>
          </Link>
          <Link href={`/create/product`}>
            <a onClick={() => resetProduct()}>
              <Button color="White" >Déposer une annonce</Button>
            </a>
          </Link>
        </div>
      </Modal>)}
      <div className='banner'>
        <img src={getStrapiMedia(home.slider[0].url)} alt="cover" className="cover" />
        <img src="/Separation3.png" alt="background" className='substract'/>
        <div className='hero'>
          <h1 dangerouslySetInnerHTML={{__html: home.heroTitle}}></h1>
          <p>{home.heroDescription}</p>
          <Link href="/landing"><button>{home.heroCTA}</button></Link>
        </div>
      </div>
      <div className="container">
        <h2 className="h1">Lis les meilleurs mangas à moindre prix !</h2>
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
