/* eslint-disable prettier/prettier */



const Step2 = ({ address, setAddress, ville, setVille, departement, setDepartement, signUp}) => {


  return (
    <div className="stepContainer">
      <h2 className='stepNumber'>3/3</h2>
      <h2>Création d'un compte</h2>
      <div className="stepWrapper">
        <h3>Préférences</h3>
        <div className="inputContainer">
          
          <label>Durée de location </label>
          <input
            type="text"
            placeholder='15 jours'
          />
          <label>Adresse </label>
          <input
            type="text"
            placeholder='27 rue du progrès'
            defaultValue={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="twoInput">
            <div>
              <label>Ville</label>
              <input
                type="text"
                placeholder='Montreuil'
                defaultValue={ville}
                onChange={(e) => setVille(e.target.value)}
              />
            </div>
            <div>
              <label>Code postal </label>
              <input
                type="number"
                placeholder='93100'
                defaultValue={departement}
                onChange={(e) => setDepartement(e.target.value)}
              />
            </div>            
          </div>
        </div>
        <div className="confirmContainer">
          <button className="confirm" onClick={() => signUp()}>Continuer</button>
        </div>        
      </div>
      
    </div>
  );
};

export default Step2;
