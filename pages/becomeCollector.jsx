/* eslint-disable prettier/prettier */
import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getBecomeCollectorPage, getConnect } from "../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getStrapiMedia } from "../utils/medias";
import { useEffect, useState } from "react";
import {getProducts} from '../store'
import Link from "next/link";

const BecomeCollectorPage = ({ becomeCollector }) => {

  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);

  const [connected, setConnected] = useState(false)

  useEffect(() => {
    if (session) {
      setConnected(true)
      localStorage.setItem('token', JSON.stringify(session));
    } else {
      setConnected(false)
      localStorage.setItem('token', JSON.stringify(''));
    }
  }, [session])
  

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
                <img src={getStrapiMedia(argument.argumentImage.url)} alt="chat"/>
                <div className="argumentText">
                  <h3>{argument.argumentTitle}</h3>
                  <p>{argument.argumentText}</p>
                </div>
              </div>
            )
          })}
          <div className="buttonContainer">
            <Link href={connected ? "/create/product" : '/login'}><button className='button buttonRed'>Déposez une annonce</button></Link>
          </div>
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
