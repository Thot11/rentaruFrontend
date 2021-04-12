import Link from "next/link";
import { useState } from "react";

const Step4 = ({ step, setStep, user, data, setData }) => {

  const [price, setPrice] = useState('')


  const nextStep = () => {
    setData({
      ...data,
      price : parseInt(price),
    })
    setStep(step+1)
  }

  const previousStep = () => {
    setStep(step-1)
  }

  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
      Un ptit prix ? : <br />
      
      Prix : <input type="number" defaultValue={price} onChange={(e) => setPrice(e.target.value)} />
      <div onClick={previousStep}>back</div> <div onClick={nextStep}>continuer</div>
    </div>
  );
};

export default Step4;
