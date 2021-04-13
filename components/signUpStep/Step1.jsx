/* eslint-disable prettier/prettier */

import { useState } from "react";

const Step1 = ({ mail, setMail, password, setPassword, confirmPassword, setConfirmPassword, setStep }) => {

  const [error, setError] = useState(null);

  const goToNextStep = () => {
    if(mail !== '' && password !== '' && confirmPassword !== '') {
      if(password === confirmPassword) {
        setStep(2);
      }
      else {
        setError('Les mots de passe doivent correspondre');
      }
    }
    else {
      setError('Veuillez remplir tous les champs');
    }
  }


  return (
    <div className="stepContainer">
      <h2 className='stepNumber'>1/3</h2>
      <h2>Création d'un compte</h2>
      <div className="stepWrapper">
        <h3>Création d'un mot de passe</h3>
        <div className="inputContainer">
          <label>Ajouter une adresse mail</label>
          <input
            type="email"
            placeholder='Naryyo667@exemple.com'
            defaultValue={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <label>Ajouter un mot de passe </label>
          <input
            type="password"
            placeholder='********'
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirmez le mot de passe </label>
          <input
            type="password"
            placeholder='********'
            defaultValue={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="newsletter">
            <input type="checkbox"/>
            <p>Inscription à la newsletter</p>
          </div>
        </div>
        <div className="confirmContainer">
          <p className="error">{error}</p>
          <button className="confirm" onClick={() => goToNextStep()}>Continuer</button>
        </div>    
      </div>
      
    </div>
  );
};

export default Step1;
