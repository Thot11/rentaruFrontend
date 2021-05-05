/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import ProductsList from "../components/ProductsList";
import { getBecomeCollectorPage, getConnect } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getStrapiMedia } from "../utils/medias";
import { useEffect, useState, useRef } from "react";
import {getProducts} from '../store'
import Link from "next/link";

const BecomeCollectorPage = ({ becomeCollector }) => {

  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);
  const router = useRouter()

  const [connected, setConnected] = useState(false)
  const [numberOfSeries, setNumberOfSeries] = useState(0);
  const [mangaInSerie, setMangaInSerie] = useState([]);
  const [price, setPrice] = useState(0);
  const [changes, setChanges] = useState(false);
  
  const [windowWidth, setWindowWidth] = useState(1281);

const simulatorRef = useRef();

  useEffect(() => {
    if (session) {
      setConnected(true)
      localStorage.setItem('token', JSON.stringify(session));
    } else {
      setConnected(false)
      localStorage.setItem('token', JSON.stringify(''));
    }
  }, [session])

  useEffect(() => {
    console.log('init', router.query.scroll, simulatorRef.current);
    if (router.query.scroll === "simulateur" && simulatorRef.current) {
      setTimeout(() => simulatorRef.current.scrollIntoView({behavior: 'smooth'}), 300);
      // simulatorRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [simulatorRef, router])

  useEffect(() => {
    let newPrice = 0;
    mangaInSerie.forEach((element) => {
      newPrice += element * 2;
    })
    setPrice(newPrice)
  }, [changes])

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
  }, []);

  const updateSize = () => {
    setWindowWidth(window.innerWidth)
  }

  const onMangaInSerieChange = (value, index) => {
    const array = mangaInSerie;
    array[index] = value;
    setMangaInSerie(array)
    setChanges(!changes)
  }
  

  return (
    <div className='becomeCollectorContainer'>
      <Head>
        <title>Deviens Collectionneur</title>
      </Head>
      <div className='banner'>
        <img src={getStrapiMedia(becomeCollector.banner.url)} alt="cover" className="cover" />
        <img src="/separation3.png" alt="background" className='substract'/>
        <div className='hero'>
          <h1>{becomeCollector.heroTitle}</h1>
          <p>{becomeCollector.heroSubtitle}</p>
        </div>
      </div>
      <div className="container">
        <h2 className="h1">{becomeCollector.title}</h2>
        <div className="arguments">
          {becomeCollector.arguments.map((argument, index) => {
            return (
              <div className="argument" key={index}>
                {windowWidth >= 700 && <img src={getStrapiMedia(argument.argumentImage.url)} alt="chat"/>}
                <div className="argumentText">
                  <h3>{argument.argumentTitle}</h3>
                  <p>{argument.argumentText}</p>
                  <div className="link" />
                </div>
              </div>
            )
          })}
          <div className="buttonContainer">
            <Link href={connected ? "/create/product" : '/login'}><button className='button buttonRed'>Déposez une annonce</button></Link>
          </div>
        </div>        
      </div>
      <div className="simulator" id="simulateur" ref={simulatorRef}>
        <h3 className="h1">{becomeCollector.simulatorTitle}</h3>
        <p className='simulatorWarning'>{becomeCollector.simulatorWarning}</p>
        <div className="simulatorWrapper">
          <h4>Dites nous en plus</h4>
          <div className="inputContainer">
            <p className="label">Combien de “séries” voulez-vous mettre en location ?</p>
            <input type="number" max="30" value={numberOfSeries} onChange={(e) => setNumberOfSeries(e.target.value > 30 ? 30 : e.target.value)} />
          </div>
          {!isNaN(parseInt(numberOfSeries) + 1) && [...Array(parseInt(numberOfSeries))].map((element,i) => {
            return (
              <div className="inputContainer">
                <p className="label labelBis">Nombre de manga dans la série {i + 1} </p>
                <input type="number" value={mangaInSerie[i]} onChange={(e) => onMangaInSerieChange(e.target.value, i)} />
              </div>
            )
          })}
          <p className="teasing">Si vous mettez vos mangas en location vos revenus seront au maximum de :</p>
          <p className="price">{price}€/mois</p>
        </div>
      </div>
      <div className="citations">
        {becomeCollector.citations.map((citation, key) => {
          return (
            <div className="citation" key={key}>
              <img src={getStrapiMedia(citation.citationImage.url)} alt="person"/>
              <div className="text">
                <h2 className='quote'>“</h2>
                <h2 className='citationText'>{citation.citationText}</h2>
                <h2 className='quote lastQuote'>“</h2>
                <p className="person">{citation.citationPerson}</p>
                <p className="personJob">{citation.citationPersonJob}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const becomeCollector = await getBecomeCollectorPage();
  return { props: { becomeCollector } };
}

export default BecomeCollectorPage;
