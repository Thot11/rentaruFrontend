import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../elements/Button"

const Step4 = ({ step, setStep, user, data, setData, preview, setPreview }) => {

  
  const [estimatedPrice, setEstimatedPrice] = useState()
  const [price, setPrice] = useState()

  const nextStep = () => {
    setData({
      ...data,
      price : parseInt(price),
    })
    setStep(step+1)
  }

  useEffect(() => {
    setPreview({
      ...preview,
      price: price ? parseInt(price) : undefined,
    })
}, [price])

  const previousStep = () => {
    setStep(step-1)
  }

  useEffect(() => {
    if (data.tomeFinal && data.tomeInitial && !data.price) {
      setEstimatedPrice(data.tomeFinal - data.tomeInitial + 1)
      setPrice(data.tomeFinal - data.tomeInitial + 1)
    } else if (data.price) {
      setPrice(data.price)
      setEstimatedPrice(data.tomeFinal - data.tomeInitial + 1)
    }
  }, [data.tomeInitial, data.tomeFinal])

  return (
    <>
      <h3>Voici notre prix recommandé :</h3>
      <div className="priceContainer">
        <div className="selectPrice">
          <div className="less" onClick={() => {if (price > 0.8*estimatedPrice) setPrice(price-1)}}>
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.14C0 6.24457 0.895431 7.14 2 7.14H15.76C16.8646 7.14 17.76 6.24457 17.76 5.14V2C17.76 0.895431 16.8646 0 15.76 0H2C0.89543 0 0 0.895431 0 2V5.14Z" fill="#F5F6F7"/>
            </svg>
          </div>
          <div className={`middle ${price >= 2*estimatedPrice ? 'red' : price > 1.5*estimatedPrice ? 'orange' : 'green'}`}>{price ?? estimatedPrice ?? '...'} euros</div>
          <div className="more" onClick={() => {if (price <= 2*estimatedPrice) setPrice(price+1)}}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.52 27.52C11.52 28.6246 12.4154 29.52 13.52 29.52H16.36C17.4646 29.52 18.36 28.6246 18.36 27.52V20.06C18.36 18.9554 19.2554 18.06 20.36 18.06H27.88C28.9846 18.06 29.88 17.1646 29.88 16.06V13.4C29.88 12.2954 28.9846 11.4 27.88 11.4H20.36C19.2554 11.4 18.36 10.5046 18.36 9.4V2C18.36 0.895432 17.4646 0 16.36 0H13.52C12.4154 0 11.52 0.895431 11.52 2V9.4C11.52 10.5046 10.6246 11.4 9.52 11.4H2C0.895433 11.4 0 12.2954 0 13.4V16.06C0 17.1646 0.895431 18.06 2 18.06H9.52C10.6246 18.06 11.52 18.9554 11.52 20.06V27.52Z" fill="#F5F6F7"/>
            </svg>
          </div>
        </div>
        {price > 2*estimatedPrice && (
          <p className="warning"><span>C’est le prix maximum</span> de cette  location. Notre communauté est là pour le plaisir du partage non pour faire du profit.</p>
        )}
      </div>
      <div className="buttonsContainer">
        <Button color={'Transparent'} functionOnClick={previousStep}>Retour</Button>
        <Button color={'Red'} functionOnClick={nextStep}>Continuer</Button>
      </div>
    </>
  );
};

export default Step4;
