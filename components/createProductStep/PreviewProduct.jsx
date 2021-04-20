import { useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia } from "../../utils/medias";

const PreviewProduct = ({ data, user }) => {

  return (
    <div className="cardProduct">
      <a>
        {data.imageCover.url && (<img src={getStrapiMedia(data.imageCover.url)} alt="cover"/>)}
        <div className="info">
          <div className="upperInfo">
            <div className="titles">
              {data.title && (<h3>{data.title}</h3>)}
              {data.tomeInitial && data.tomeInitial && (<p>Tome {data.tomeInitial} à {data.tomeFinal} </p>)}
            </div>
          </div>
          <div className="downerInfo">
            <a className="collector">
              <div className="picture">
                <img src={getStrapiMedia(user.profilPic?.url)} alt="profil picture"/>
              </div>
              <div className="collectorInfo">
                <p className="name">{user.username}</p>
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
              </div>
            </a>
            {data.price && (
               <div className="price">
              {data.price}€ 
              <span>/2 semaines</span>
            </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default PreviewProduct;
