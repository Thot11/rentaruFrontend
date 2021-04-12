import Link from "next/link";
import slugify from 'slugify';
import { useState } from "react";


const Step1 = ({ step, setStep, user, data, setData }) => {

  const [name, setName] = useState('')

  const nextStep = () => {
    if (name) {
      setData({
        user: user.id,
        title : name,
        slug : slugify(name)
      })
      setStep(step+1)
    }
  }

  return (
    <>
       <h3>Quelle série mettez vous en location ?</h3>
      <input type="text" className="inputText" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Dites nous le titre de votre manga..."/>
      <div onClick={nextStep} className="nextStepBtn">Submit</div>
    </>
  );
};

export default Step1;
