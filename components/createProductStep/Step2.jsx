import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown from "../dropdown";
import Button from "../../elements/Button"


const Step2 = ({ step, setStep, user, data, setData, preview, setPreview }) => {

  const [integrale, setIntegrale] = useState(false)
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [langue, setLangue] = useState('')
  const [edition, setEdition] = useState('')
  const [etat, setEtat] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState(0)
  const [selectedEditor, setEditor] = useState(0)

  const languages = ['Français', 'Anglais', 'Japonais', 'Italie']
  const editors = ['Glénat', 'Pika', 'Ki-oon', 'Kana', 'Delcourt']



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

  useEffect(() => {
      setPreview({
        ...preview,
        tomeInitial: from ? parseInt(from) : undefined,
        tomeFinal: to ? parseInt(to) : undefined
      })
  }, [from, to])

  useEffect(() => {
    if (selectedLanguage !== -1) {
      setLangue(languages[selectedLanguage])
    }
  }, [selectedLanguage])

  useEffect(() => {
    if (selectedEditor !== -1) {
      setEdition(languages[selectedLanguage])
    }
  }, [selectedEditor])


  return (
    <>
      <h3>Dites nous en plus :</h3>
      <div className="checkboxContainer">
        <p>Est ce l'intégral de la série ? &nbsp;</p>
        <input type="checkbox" defaultValue={integrale} onChange={(e) => setIntegrale(!integrale)} />
      </div>
      <div className="tomeContainer">
        <p>Du tome</p>
        <input type="number" defaultValue={from} onChange={(e) => setFrom(e.target.value)} />
        <p>au</p>
        <input type="number" defaultValue={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div className="languageContainer">
        <p>Langue de la collection :&nbsp;</p>
        <div className="select">
          <Dropdown filters={languages} selectedItem={selectedLanguage} setSelectedItem={setSelectedLanguage} />
        </div>
      </div>
      <div className="languageContainer">
        <p>Editeurs :&nbsp;</p>
        <div className="select">
          <Dropdown filters={editors} selectedItem={selectedEditor} setSelectedItem={setEditor} />
        </div>
      </div>
      <div className="tomeContainer">
        <p>Etat : </p>
        <input type="text" defaultValue={etat} onChange={(e) => setEtat(e.target.value)} />
      </div>
      <div className="buttonsContainer">
        <Button color={'Transparent'} functionOnClick={previousStep}>Retour</Button>
        <Button color={'Red'} functionOnClick={nextStep}>Continuer</Button>
      </div>
    </>
  );
};

export default Step2;
