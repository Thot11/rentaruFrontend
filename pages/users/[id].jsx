/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
import { getUsers, getUser } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";

const UserPage = ({ user }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading user...</div>;
  }

  const [memberSince, setMemberSince] = useState('')


  const calculDate = () => {
    const now = Date.now();
    const currentDate = now - new Date(user.created_at);
    setMemberSince(Math.trunc(currentDate/1000/60/60/24))
  }

  console.log(memberSince);
  useEffect(() => {
    calculDate()
  }, [])

  return (
    <div>
    <Head>
      <title>{user.username}</title>
    </Head>
    <div className="userContainer">
      <div className="contentTop">        
        <div className="infoProfil">
          <div className="actions">
            <div className="editBtn">
              <p>Modifier</p>
              <img src="/edit.svg" alt="edit"/>
            </div>
          </div>
          <div className="infos">
            <img className='profilPic' src={getStrapiMedia(user.profilPic?.url)} alt="profil picture"/>
            <h2>{user.username}</h2>
            <p>📍 {user.ville} ({user.departement[0]}{user.departement[1]})</p>
            <div className="reviews">
              <div className="stars">
                {
                [1,2,3,4,5].map((el, index) => {
                  return (
                    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg" key={index} className={index < user.note ? 'starFill' : 'starEmpty'}>
                      <path d="M2.19947 0.463526C2.34915 0.0028702 3.00085 0.0028702 3.15053 0.463526L3.38783 1.19387C3.45477 1.39988 3.64675 1.53936 3.86336 1.53936H4.63129C5.11565 1.53936 5.31704 2.15917 4.92518 2.44387L4.30391 2.89525C4.12867 3.02257 4.05534 3.24825 4.12228 3.45427L4.35958 4.18461C4.50926 4.64527 3.98202 5.02833 3.59016 4.74363L2.96889 4.29225C2.79365 4.16493 2.55635 4.16493 2.38111 4.29225L1.75984 4.74363C1.36798 5.02833 0.840741 4.64527 0.990417 4.18461L1.22772 3.45427C1.29466 3.24825 1.22133 3.02257 1.04609 2.89525L0.424816 2.44387C0.0329596 2.15917 0.234347 1.53936 0.718709 1.53936H1.48664C1.70325 1.53936 1.89523 1.39988 1.96217 1.19387L2.19947 0.463526Z" fill="white"/>
                    </svg>
                  )                    
                })}
              </div>
              <button>Voir les avis</button>
            </div>
            <div className="confirmed">
              <div className="confirmation">
                <img src="/checkmark.png" alt="checkmark"/>
                <p className='elementConfirmed'>Remise en main prope</p>
              </div>
              <div className="confirmation">
                <img src="/checkmark.png" alt="checkmark"/>
                <p className='elementConfirmed'>Carte d’identité vérifiée</p>
              </div>
              <div className="confirmation">
                <img src="/checkmark.png" alt="checkmark"/>
                <p className='elementConfirmed'>Adresse mail vérifiée</p>
              </div>
            </div>
          </div>
          <div className="msgBtn">
            <button className='button buttonRed'>Envoyer un message</button>
          </div>
        </div>
        <div className="centerContent">
          <div className="rewards">
            <div className="cardReward">
              <img src="/book.svg" alt="book"/>
              <div className="infoReward">
                <p className='number'>{user.products.length}</p>
                <p className='title'>Série{user.products.length > 1 ? 's' : ''} de manga mise{user.products.length > 1 ? 'nt' : ''} en location</p>
              </div>
            </div>
          </div>
          <div className="description"></div>
          <div className="top"></div>
        </div>
      </div>
    </div>
    <div>mail : {user.email} </div>
    <div>note : {user.note} </div>
    <div>nb annonces : {user.products.length} </div>
    <div>Member since : {memberSince}</div>
    <ProductsList products={user.products} user={user}/>
  </div>
  );
};

export default UserPage;

export async function getStaticProps({ params }) {
  const user = await getUser(params.id);

  return { props: { user } };
}

export async function getStaticPaths() {
  const users = await getUsers();
  return {
    paths: users.map((_user) => {
      return {
        params: { id: _user.id.toString() },
      };
    }),
    fallback: true,
  };
}
