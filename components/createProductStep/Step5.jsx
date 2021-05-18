import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../../elements/Button"
import Dropdown from "../dropdown";

const Step5 = ({ step, setStep, user, data, setData, preview, setPreview }) => {

  const [description, setDescription] = useState(data.description ?? '')
  const [error, setError] = useState(false)
  const [delivery, setDelivery] = useState(data.delivery ?? '')

  const deliveries = ['Remise en main propre', 'Envoi postal', 'Indifférent']
  const deliveryIndex = user.handToHand ? user.relaiColis ? 2 : 0 : user.relaiColis ? 1 : 2;
  const [selectDelivery, setSelectDelivery] = useState(data.delivery ? deliveries.findIndex(delive => delive === data.delivery) : deliveryIndex);

  const nextStep = () => {
    setData({
      ...data,
      description,
      delivery
    })
    setStep(step+1)
  }

  const previousStep = () => {
    setStep(step-1)
  }

  useEffect(() => {
    if (selectDelivery !== -1) {
      setDelivery(deliveries[selectDelivery])
    }
  }, [selectDelivery])

  return (
    <>
      <div>
        <h3>Décris ton annonce pour attirer les lecteurs :</h3>
        <textarea type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ajoutez ici une description courte ou non.....comme vous voulez" />
        {error && (<p className="error" >Veuillez entrer une description svp (3 caractères min)</p>)}
        <div className="deliveryContainer">
          <div className="label">Mode de livraison</div>
          <Dropdown filters={deliveries} selectedItem={selectDelivery} setSelectedItem={setSelectDelivery} />
        </div>
      </div>
      <div className="buttonsContainer">
        <Button color={'Transparent'} functionOnClick={previousStep}>Retour</Button>
        <Button color={'Red'} functionOnClick={() => {if (description.length > 2) nextStep(); else setError(true) }}>Continuer</Button>
      </div>
    </>
  );
};

export default Step5;
