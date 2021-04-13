import Link from "next/link";
import { useState } from "react";
import Button from "../../elements/Button"

const Step5 = ({ step, setStep, user, data, setData, preview, setPreview }) => {

  const [description, setDescription] = useState('')


  const nextStep = () => {
    setData({
      ...data,
      description
    })
    setStep(step+1)
  }

  const previousStep = () => {
    setStep(step-1)
  }

  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
     une ptite description? : <br />
      
      description : <input type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
      <div className="buttonsContainer">
        <Button color={'Transparent'} functionOnClick={previousStep}>Retour</Button>
        <Button color={'Red'} functionOnClick={nextStep}>Continuer</Button>
      </div>
    </div>
  );
};

export default Step5;
