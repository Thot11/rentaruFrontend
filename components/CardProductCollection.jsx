/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";
import Button from "../elements/Button";

const CardProduct = ({ product, key, setOpenModal, setInfoModal }) => {
  return (
    <div className={`cardProduct ${product.status === 'draft' ? 'draft' : ''}`} key={key}>
      {product.integrale && (
        <div className="badgeSilver">
          <img src="/book2.svg" alt="book"/>
          Intégrale
        </div>
      )}
      {product.status === 'draft' && 
        <div className="modalContainer">
          <div className="modalContent">
            <div className="text">
              <p><span>Cette série est actuellement en mode brouillon et non visible pour les utilisateurs</span></p>
              <Button color="Transparent" functionOnClick={() => setInfoModal({published: true, id: product.id})}>La rendre visible</Button>
            </div>
          </div>
        </div>
      }
        <a>
          <img src={getStrapiMedia(product.imageCover.url)} alt="cover"/>
          <div className="info">
            <div className="upperInfo">
              <div className="titles">
                <h3>{product.title}</h3>
                <p>Tome {product.tomeInitial} à {product.tomeFinal} </p>
              </div>
            </div>
            <div className="downerInfo">
              <div className="update">
                <div className="delete" onClick={() => {
                  setOpenModal(true);
                  setInfoModal({name: product.title, id: product.id, tomeInitial: product.tomeInitial, tomeFinal: product.tomeFinal, booked: product.booked, commandes: product.commandes});
                }}>
                  <img src="/trash.svg" alt=""/>
                </div>
                <Link href={`/update/${product.slug}`}>
                  <div className="modify">
                    <img src="/edit.svg" alt=""/>
                  </div>
                </Link>
              </div>
              <div className="price">
                {new Intl.NumberFormat('fr-FR',{ style: 'currency', currency: 'EUR' }).format(product.price)}
                <span>/2 semaines</span>
              </div>
            </div>
          </div>
        </a>
    </div>
  );
};

export default CardProduct;
