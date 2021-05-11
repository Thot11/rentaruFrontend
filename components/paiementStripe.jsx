import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


const PaiementStripe = ({delivery, setStripeToken}) => {

  const stripe = useStripe();
  const elements = useElements();
  // const [cardElement, setCardElement] = useState()
  
  useEffect(() => {
    test()
  }, [delivery])
  
  async function test() {
    if (elements) {
      const cardElement = elements.getElement(CardElement);
      const tokenStripe = await stripe.createToken(cardElement);
      setStripeToken(tokenStripe)
    }
    // console.log(tokenStripe);
  }

  return (
    <div>
      <CardElement></CardElement>
    </div>
  );
};

export default PaiementStripe;
