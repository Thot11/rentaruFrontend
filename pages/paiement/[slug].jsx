/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProduct, postCommande, updateProduct } from "../../utils/api";
import Moment from 'moment';
import 'moment/locale/fr'
import { extendMoment } from 'moment-range';
import { getStrapiMedia } from "../../utils/medias";
import CheckBox from "../../elements/CheckBox";
import Link from "next/link";
import DropDown from "../../elements/DropDown";

const PaiementPage = ({ product }) => {

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading product...</div>;
  }

  const moment = extendMoment(Moment);

  const { rent, user, session } = useSelector((state) => state);

  const [delivery, setDelivery] = useState('Remise en main propre');
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [cglAccepted, setCglAccepted] = useState(false);
  const [price, setPrice] = useState(product.price)

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

  const go = () => {
    postCommande(product.id, user.id, product.user.id, rent.startDate, rent.endDate, price, price*1.1+0.2, deliveryPrice, 'handToHand', session).then((resp) => {
      updateProduct(product.id, {booked : rent.bookings}, session).then(() => router.push(`/`))
    })
  }

  const goBack = () => {
    router.push(`/products/${product.slug}`)
  }

  useEffect(() => {
    if (rent.startDate && rent.endDate) {
      const range =  moment.range(rent.startDate, rent.endDate)
      const days = range.diff('days')+1;
      if (days > 14) {
        setPrice(((days-14)*0.05+1)*product.price)
      } else if (days < 14) {
        setPrice((1-((14-days)*0.05))*product.price)
      } else {
        setPrice(product.price*1.1+0.2)
      }
    }
  }, [rent.startDate, rent.endDate])


  return (
    <div className="paiementPage">
      
      <Head>
        <title>Rent Page paiement </title>
      </Head>
      <div className="leftContent">
        <div className="title">
          <img src="/bigArrow.svg" alt="arrow" onClick={goBack}/>
          <h2>Confirmez et payez</h2>
        </div>
        <div className="rentInfo">
          <h3>Votre location</h3>
          <div className="date">
            <div className="headerDate">
              <p className="label">Dates</p>
              <button className="editBtn" onClick={goBack}>Modifier</button>
            </div>
            <p className="dateNumber">{moment(rent.startDate).format('Do MMMM')}-{moment(rent.endDate).format('Do MMMM')}</p>
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
            <h2>{product.title}</h2>
            <p className='tomes'> Tome {product.tomeInitial} à {product.tomeFinal}</p>
            <p className="subtitle">Détails du prix</p>
            <div className="price">
              <p>Comission collectionneur</p>
              <p>{new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(price)}</p>
            </div>
            <div className="price">
              <p>Frais de service</p>
              <p>{new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(price*0.1+0.2)}</p>
            </div>
            <div className="price">
              <p>{delivery}</p>
              <p>{new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(deliveryPrice)}</p>
            </div>
            <div className="priceTotal">
              <p>Total (EUR)</p>
              <p>{new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(price*1.1+0.2 + deliveryPrice)}</p>
            </div>
          </div>
        </div>
        <div className="bullshit">
          <div className="condition">
            <h3>Condition d’annulation :</h3>
            <p>Si vous devez annuler, merci de prévenir dans les temps, en respectant les délais d'annulation. Pour plus d’informations merci de consulter les CGL</p>
          </div>
          <div className="caution">
            <h3>Caution</h3>
            <p>La caution s'engage à la demande du débiteur avec lequel elle est liée par un contrat de garantie. Elle garantit au collectionneur qu'il sera remboursé en cas de défaut. Le cautionnement bancaire est fourni par des sociétés spécialisées sécurisées.</p>
          </div>
        </div>
        <div className="acceptCGL">
          <CheckBox checked={cglAccepted} setChecked={setCglAccepted} info={true} resetInfo={false} />
          <Link href="/CGL">
            <p>En cochant cette case vous acceptez les CGL</p>
          </Link>
        </div>
        <button className='button buttonRed btnPay' onClick={go}>Valider et payer</button>
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
