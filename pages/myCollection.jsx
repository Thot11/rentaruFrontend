import Head from "next/head";
import { useSelector, useDispatch } from 'react-redux';
import CardProduct from '../components/CardProductCollection'
import Link from "next/link";
import Modal from "../components/Modal"
import { useState } from "react";
import Button from "../elements/Button";
import { deleteProduct } from "../utils/api";
import { updateLocalme } from "../store"

const MyCollection = () => {

  const dispatch = useDispatch();
  const { user, session } = useSelector((state) => state);

  const [openModal, setOpenModal] = useState(false)
  const [infoModal, setInfoModal] = useState({})
  const [error, setError] = useState(false)

  const suppProduct = () => {
    deleteProduct(infoModal.id, session).then(resp => {
      if (resp) {
        setOpenModal(false);
        setInfoModal({})
        const updatedUser = {...user, products: user.products.filter(product => product.id !== infoModal.id)}
        dispatch(updateLocalme(updatedUser))
      } else (setError('Problème veuillez réessayer svp')) 
    }).catch(e => {console.log(e); setError('Problème veuillez réessayer svp')})
  }

  return (
    <div>
      <Head>
        <title>Ma collection</title>
      </Head>
      {openModal && (<Modal open={openModal} setOpen={setOpenModal}>
        <img src="/cuteCat.svg" alt="cute cat" className="cuteCat"/>
        <div className="sure">Es-tu sur de vouloir supprimer {infoModal.name} tome {infoModal.tomeInitial} à {infoModal.tomeFinal} ?</div>
        <div className="buttonsContainer">
          <Button color="Transparent" functionOnClick={() => setOpenModal(false)}>Annuler</Button>
          <Button color="Red" functionOnClick={() => suppProduct()}>Supprimer</Button>
        </div>
        {error && (<p>{error}</p>)}
      </Modal>)}
      <div className="container collectionContainer">
        <h1 className="h1">Ma collection</h1>
        <div className="productsContainers collectionProductsContainer">
          <Link href="/create/product">
            <div className="createAnnonce">
              <span>+</span> 
            </div>
          </Link>
          {user.products && user.products.map((_product, key) => (
            <CardProduct product={_product} key={key} setOpenModal={setOpenModal} setInfoModal={setInfoModal}/>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MyCollection;
