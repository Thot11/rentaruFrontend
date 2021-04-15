/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { getProducts, getProduct } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";
import CheckBox from "../../elements/CheckBox";
import Link from "next/link";
import DropDown from "../../elements/DropDown";

const PaiementPage = ({ product }) => {

  const [delivery, setDelivery] = useState('Remise en main propre');
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  useEffect(() => {
    if(delivery === 'Livraison Mondial Relay') {
      setDeliveryPrice(13);
    }
    else if(delivery === 'Livraison Colissimo') {
      setDeliveryPrice(20);
    }
    else {
      setDeliveryPrice(0);
    }
  },[delivery])

  return (
    <div className="paiementPage">
      
      <Head>
        <title>Rent {product.title} </title>
      </Head>
      <div className="leftContent">
        <div className="title">
          <img src="/bigArrow.svg" alt="arrow"/>
          <h2>Confirmez et payez</h2>
        </div>
        <div className="rentInfo">
          <h3>Votre location</h3>
          <div className="date">
            <div className="headerDate">
              <p className="label">Dates</p>
              <button className="editBtn">Modifier</button>
            </div>
            <p className="dateNumber">15-30 mars</p>
          </div>
          <div className="prices">
            <div className="price">
              <div className="leftPart">
                <CheckBox checked={delivery === 'Remise en main propre'} setChecked={setDelivery} info={'Remise en main propre'} resetInfo={''} />                
                <p className="label">Remise en main propre</p>
              </div>
              <p className="priceNumber">0,00 €</p>
            </div>
            <div className="price">
              <div className="leftPart">
                <CheckBox checked={delivery === 'Relais colis'} setChecked={setDelivery} info={'Relais colis'} resetInfo={''} />  
                <p className="label">Relais colis</p>
              </div>
              <p className="priceNumber">0,00 €</p>
            </div>
            <div className="price">
              <div className="leftPart">
                <CheckBox checked={delivery === 'Livraison Mondial Relay'} setChecked={setDelivery} info={'Livraison Mondial Relay'} resetInfo={''} />  
                <p className="label">Livraison Mondial Relay</p>
              </div>
              <p className="priceNumber">13,00 €</p>
            </div>
            <div className="price">
              <div className="leftPart">
                <CheckBox checked={delivery === 'Livraison Colissimo'} setChecked={setDelivery} info={'Livraison Colissimo'} resetInfo={''} /> 
                <p className="label">Livraison Colissimo</p>
              </div>
              <p className="priceNumber">20,00 €</p>
            </div>
          </div>
          <div className="creditCard">
            <div className="title">
              <h2>Payer avec</h2>
              <div className="imagesPayement">
                <img src="/paypal.svg" alt="paypal"/>
                <img src="/visa.png" alt="visa"/>
              </div>
            </div>
            <DropDown title='Carte de crédit ou de débit' color={'dark'} isImage={true}>
              <div className="card">
                <input type="text" placeholder='Numéro de carte 🔒' className='cardNumber' />
                <div className="cardMore">
                  <input type="text" placeholder='Expiration' className='cardExpiration'/>
                  <input type="text" placeholder='Cryptogramme' className='cardCrypto'/>
                </div>
              </div>
              <input type="text" placeholder='Code Postal' className="postalCode"/>
              <input type="text" placeholder='Pays/région' className="country"/>
              <button className='button buttonWhite'>Enregistrer</button>
            </DropDown>
          </div>
        </div>
      </div>
      <div className="rightContent">
        <div className="card">
          <img src={getStrapiMedia(product.imageCover.url)} alt="cover"/>
          <div className="productInfo">
            <h2><span>{product.title}</span> | Tome {product.tomeInitial} à {product.tomeFinal}</h2>
            <p className="subtitle">Détails du prix</p>
            <div className="price">
              <p>Comission collectionneur</p>
              <p>{product.price - 2},00€</p>
            </div>
            <div className="price">
              <p>Frais de service</p>
              <p>2,00€</p>
            </div>
            <div className="price">
              <p>Assurance</p>
              <p>1,00€</p>
            </div>
            <div className="price">
              <p>{delivery}</p>
              <p>{deliveryPrice},00€</p>
            </div>
            <div className="priceTotal">
              <p>Total (EUR)</p>
              <p>{product.price + deliveryPrice},00€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaiementPage;

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      };
    }),
    fallback: true,
  };
}
