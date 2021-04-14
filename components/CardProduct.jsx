/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";

const CardProduct = ({ product, key, user }) => {

  return (
    <div className="cardProduct" key={key}>
      <Link href={`/products/${product.slug}`}>
        <a>
          <img src={getStrapiMedia(product.imageCover.url)} alt="cover"/>
          <div className="info">
            <div className="upperInfo">
              <div className="titles">
                <h3>{product.title}</h3>
                <p>Tome {product.tomeInitial} à {product.tomeFinal} </p>
              </div>
              <div className="like">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.91428 0C3.64349 0 2.36709 0.520829 1.41986 1.56656C-0.47461 3.65797 -0.471964 6.97426 1.41986 9.06685L8.32224 16.7001C8.40853 16.7948 8.51284 16.8702 8.62872 16.9218C8.74461 16.9734 8.86958 17 8.99591 17C9.12223 17 9.24721 16.9734 9.36309 16.9218C9.47898 16.8702 9.58329 16.7948 9.66958 16.7001C11.9712 14.1591 14.2775 11.6153 16.5792 9.07423C18.4736 6.98284 18.4736 3.66543 16.5792 1.57395C14.6847 -0.517538 11.492 -0.517576 9.59753 1.57395L8.99951 2.23161L8.4015 1.56656C7.45426 0.520834 6.18508 0 4.91428 0V0ZM4.91428 1.83997C5.6774 1.83997 6.43569 2.1775 7.04696 2.85233L8.32945 4.26371C8.41573 4.35834 8.52005 4.43377 8.63593 4.48535C8.75181 4.53693 8.87679 4.56355 9.00311 4.56355C9.12944 4.56355 9.25442 4.53693 9.3703 4.48535C9.48618 4.43377 9.5905 4.35834 9.67678 4.26371L10.9521 2.86711C12.1746 1.5174 14.0021 1.51744 15.2246 2.86711C16.4471 4.21678 16.4471 6.4389 15.2246 7.78846C13.1463 10.083 11.0706 12.3736 8.99231 14.6681L2.7744 7.78109C1.55228 6.42927 1.55191 4.20189 2.7744 2.85233C3.38566 2.1775 4.15117 1.83997 4.91428 1.83997V1.83997Z" fill="white"/>
                  <path d="M1.57178 3.32034C3.97178 -0.679657 7.23845 2.32034 8.57178 4.32034C12.5718 1.82031 12.0718 -1.17969 16.0718 3.32028C19.2718 6.92026 11.9051 13.1537 8.07178 15.3204C4.90512 12.987 -0.828218 7.32034 1.57178 3.32034Z" fill="white"/>
                </svg>
                <img src="/likeBackground.png" alt="Search" className='backgroundLike'/>
              </div>
            </div>
            <div className="downerInfo">
              <Link href={`/users/${user.id}`}>
                <a className="collector">
                  <div className="picture">
                    <img src={getStrapiMedia(user.profilPic?.url)} alt="profil picture"/>
                  </div>
                  <div>
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
              </Link>
              <div className="price">
                {product.price}€
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardProduct;
