/* eslint-disable prettier/prettier */



const Step2 = ({ nom, setNom, prenom, setPrenom, phone, setPhone, username, setUsername, setSelectedFile, setStep}) => {


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
          <label>Ajouter une photo de profil </label>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
        <div className="confirmContainer">
          <button className="confirm" onClick={() => setStep(3)}>Continuer</button>
        </div>        
      </div>
      
    </div>
  );
};

export default Step2;
