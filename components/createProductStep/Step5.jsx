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
    <>
      <div>
        <h3>Décris ton annonce pour attirer les lecteurs :</h3>
        <textarea type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ajoutez ici une description courte ou non.....comme vous voulez" />
      </div>
      <div className="buttonsContainer">
        <Button color={'Transparent'} functionOnClick={previousStep}>Retour</Button>
        <Button color={'Red'} functionOnClick={nextStep}>Continuer</Button>
      </div>
    </>
  );
};

export default Step5;
