/* eslint-disable prettier/prettier */

import { useState } from "react";
import Button from "../../elements/Button";

const Step2 = ({ nom, setNom, prenom, setPrenom, phone, setPhone, username, setUsername, selectedFile, setSelectedFile, setStep}) => {

  const [error, setError] = useState(null);

  const goToNextStep = () => {
    if(nom !== '' && prenom !== '') {
      setStep(3);
    }
    else {
      setError('Veuillez remplir les champs obligatoires');
    }
  }

  return (
    <div className="stepContainer">
      <h2 className='stepNumber'>2/3</h2>
      <h2>Création d'un compte</h2>
      <div className="stepWrapper">
        <h3>Informations supplémentaires</h3>
        <div className="inputContainer">
          <div className="twoInput">
            <div>
              <label>Nom*</label>
              <input
                type="text"
                placeholder='Luffy'
                defaultValue={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div>
              <label>Prenom* </label>
              <input
                type="text"
                placeholder='Monkey D'
                defaultValue={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            
          </div>
          
          <label>Numéro de téléphone </label>
          <input
            type="tel"
            placeholder='06 00 00 00 00'
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Pseudo </label>
          <input
            type="text"
            placeholder='Mon pseudal'
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="hide"
            type="file"
            id="file-upload"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <label for="file-upload" className="addImages">
          <img src="/plusSignUp.svg" alt=""/>
          <p>Ajouter une photo de profil</p>
        </label>
        <div className="previewContainer">
          {selectedFile && (<img src={URL.createObjectURL(selectedFile)} alt="preview image" />)}
        </div>
        </div>
        <div className="confirmContainer">
          <p className="error">{error}</p>
          <Button color={'Red'} functionOnClick={goToNextStep}>Continuer</Button>
        </div>        
      </div>
      
    </div>
  );
};

export default Step2;
