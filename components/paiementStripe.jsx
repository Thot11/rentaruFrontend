import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import DropDown from "../elements/DropDown";


const PaiementStripe = ({children, cglAccepted, go}) => {

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState()
  
  async function preGo() {
    if (elements) {
      const cardElement = elements.getElement(CardNumberElement);
      if (!cardElement) {setError('Vérifier vos informations puis réessayer svp'); return}
      const tokenStripe = await stripe.createToken(cardElement);
      if (tokenStripe.error) {setError('Vérifier vos informations puis réessayer svp'); return}
      go(tokenStripe)
    }
  }

  return (
    <>
      <DropDown title='Carte de crédit ou de débit' color={'dark'} isImage={true}>
        <div className="card">
          <CardNumberElement className="cardNumber" options={{style: {base : {color: '#fff', '::placeholder' : {color: '#fff'}}}}}/>
          <div className="cardMore">
          <CardExpiryElement className="cardExpiration" options={{style: {base : {color: '#fff', '::placeholder' : {color: '#fff'}}}}}/>
          <CardCvcElement className="cardCrypto" options={{style: {base : {color: '#fff', '::placeholder' : {color: '#fff'}}}}} />
          </div>
        </div>
      </DropDown>
      {children}
      {error && (<div className="error">{error}</div>) }
      <button className={`button buttonRed btnPay ${!cglAccepted ? 'disable' : ''}`} onClick={() => preGo()}>Valider et payer</button>
    </>
  );
};

export default PaiementStripe;
