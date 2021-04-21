/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";

import Button from "../elements/Button";
import { getLandingPage } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";

const Landing = ({landing}) => {

  return (
    <div>
      <Head>
        <title>Landing Page</title>
      </Head>
      <div className="landingContainer">
        <div className="header">
          <div className="back">
            <img src="/headerBackground3.png" alt="background" className='background'/>
            <img src="/substract.png" alt="background" className='substract'/>
          </div>
          <div className="backMobile">
            <img src="/headerBackground3.png" alt="background" className='background'/>
            <img src="/separation4.png" alt="background" className='substract'/>
          </div>
          <h1>{landing.title} </h1>
          <p className="subtitle">{landing.subtitle} </p>
        </div>
        <h2 className="h1">Comment marche la location de mangas ?</h2>
        <div className="collectorPart">
          <h2>{landing.titleCollector} </h2>
          <p className="explanation">{landing.explanationCollector}</p>
          <p className="tips">{landing.tipsCollector}</p>
          <div className="cardsContainer">
            {landing.cardsCollector.map((card, key) => {
              return (
                <div className="card" key={key}>
                  <img src={getStrapiMedia(card.image[0].url)} alt="online"/>
                  <h3>{card.titleCard}</h3>
                  <p>{card.descriptionCard}</p>             
                </div>
              )
            })}
          </div>
          <div className="buttonContainer">
            <Link href="/create/product">
              <a>
                <Button color={'Red'}>Déposer une annonce</Button>
              </a>   
            </Link>
          </div>
        </div>
        <div className="readerPart">
          <img src="separation1.png" alt="" className="separation separation1" />
          <img src="separation2.png" alt="" className="separation separation2" />
          <h2>{landing.titleReader} </h2>
          <p className="explanation">{landing.explanationReader}</p>
          <p className="tips">{landing.tipsReader}</p>
          <div className="cardsContainer">
            {landing.cardsReader.map((card, key) => {
              return (
                <div className="card" key={key}>
                  <img src={getStrapiMedia(card.image[0].url)} alt="online"/>
                  <h3>{card.titleCard}</h3>
                  <p>{card.descriptionCard}</p>                  
                </div>
              )
            })}
          </div>
          <div className="buttonContainer">
            <Link href="/">
              <a>
                <Button color={'Red'}>Louer une collection</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="insurancePart">
          <h2>{landing.titleInsurance} </h2>
          <p className="explanation">{landing.explanationInsurance}</p>
          <p className="tips">{landing.tipsInsurance}</p>
          <div className="cardsContainer">
            {landing.cardsInsurance.map((card, key) => {
              return (
                <div className="card" key={key}>
                  <img src={getStrapiMedia(card.image[0].url)} alt="online"/>
                  <h3>{card.titleCard}</h3>
                  <p>{card.descriptionCard}</p>                  
                </div>
              )
            })}
          </div>
        </div>
        {/* <div className="footer">
          <img src="/footerBackground.png" alt="footerBackground"/>
          <h1>{landing.footerTitle}</h1>
          <p>{landing.footerSubtitle}</p>
          <div className="buttons">
            <Link href="/create/product">
              <a>
                <Button color={'Red'}>{landing.footerCTA}</Button>
              </a>            
            </Link>
            <Link href="/">
              <a>
                <Button color={'Red'}>{landing.footerSecondCTA}</Button> 
              </a>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const landing = await getLandingPage();
  return { props: { landing } };
}

export default Landing;
