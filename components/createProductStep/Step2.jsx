import Link from "next/link";
import { useState } from "react";

const Step2 = ({ step, setStep, user, data, setData }) => {

  const [integrale, setIntegrale] = useState(false)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [langue, setLangue] = useState('')
  const [edition, setEdition] = useState('')
  const [etat, setEtat] = useState('')

  const nextStep = () => {
    setData({
      ...data,
      integrale,
      tomeInitial : parseInt(from),
      tomeFinal : parseInt(to),
      langue,
      edition,
      etat
    })
    setStep(step+1)
  }

  const previousStep = () => {
    setStep(step-1)
  }

  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
      Dites nous en plus : <br />
      Intégral : <input type="checkbox" defaultValue={integrale} onChange={(e) => setIntegrale(!integrale)} />
      From : <input type="number" defaultValue={from} onChange={(e) => setFrom(e.target.value)} />
      to : <input type="number" defaultValue={to} onChange={(e) => setTo(e.target.value)} />
      Langue : <input type="text" defaultValue={langue} onChange={(e) => setLangue(e.target.value)} />
      Edition : <input type="text" defaultValue={edition} onChange={(e) => setEdition(e.target.value)} />
      Etat : <input type="text" defaultValue={etat} onChange={(e) => setEtat(e.target.value)} />
      <div onClick={previousStep}>back</div> <div onClick={nextStep}>continuer</div>
    </div>
  );
};

export default Step2;
