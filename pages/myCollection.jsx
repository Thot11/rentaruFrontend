import Head from "next/head";
import { useSelector, useDispatch } from 'react-redux';
import CardProduct from '../components/CardProductCollection'
import Link from "next/link";
import Modal from "../components/Modal"
import { useEffect, useState } from "react";
import Button from "../elements/Button";
import { deleteProduct, getMyCollectionsOrders, deleteOrder, updateProduct } from "../utils/api";
import { updateLocalme } from "../store"

import Moment from 'moment';
import 'moment/locale/fr'
import { extendMoment } from 'moment-range';

const MyCollection = () => {

  const moment = extendMoment(Moment);

  const dispatch = useDispatch();
  const { user, session } = useSelector((state) => state);


  const [openModal, setOpenModal] = useState(false)
  const [infoModal, setInfoModal] = useState({})
  const [cantDelete, setCantDelete] = useState(false)
  const [myCollectionOrders, setMyCollectionOrders] = useState([])
  const [error, setError] = useState(false)

  const publishProduct = () => {
    updateProduct(infoModal.id, {status: 'published'},session).then(resp => {
      setInfoModal({})
      const index = user.products.findIndex(product => product.id === infoModal.id)
      user.products[index].status = 'published'
      dispatch(updateLocalme(user))
    })
  }

  const archProduct = () => {
    updateProduct(infoModal.id, {status: 'draft'},session).then(resp => {
      setOpenModal(false);
      setInfoModal({})
      const index = user.products.findIndex(product => product.id === infoModal.id)
      user.products[index].status = 'draft'
      dispatch(updateLocalme(user))
    })
  }

  const suppProduct = () => {
    deleteProduct(infoModal.id, session).then(resp => {
      if (resp) {
        const deleteOrders = myCollectionOrders.filter(order => order.product.id === infoModal.id)
        if (deleteOrders) {
          deleteOrders.forEach(order => {
            deleteOrder(order.id, session)
          })
        }
        setOpenModal(false);
        setInfoModal({})
        const updatedUser = {...user, products: user.products.filter(product => product.id !== infoModal.id)}
        dispatch(updateLocalme(updatedUser))
      } else (setError('Problème veuillez réessayer svp')) 
    }).catch(e => {console.log(e); setError('Problème veuillez réessayer svp')})
  }

  const isBooked = () => {
    if (openModal && infoModal) {
      if (infoModal.booked) {
        let willBeRead = [];
        infoModal.booked.forEach(book => {
          const range =  moment.range(book.startDate, book.endDate)
          const now = range.contains(moment())
          if (!now && moment(book.endDate) <= moment()) willBeRead = [...willBeRead, false];
          else willBeRead = [...willBeRead, true];
          if (willBeRead.includes(true)) { setCantDelete(true)} else setCantDelete(false)
        })
      } else {setCantDelete(false)}
    }
  }

  useEffect(() => {
    if (openModal) {
      isBooked()
    } else if (infoModal.published) {
      publishProduct()
    }
  }, [infoModal])

  useEffect(() => {
    if (session) {
      getMyCollectionsOrders(user.id, session).then(resp => {
        if (resp) {
          setMyCollectionOrders(resp);
        }
      });
    }
  }, [user])

  return (
    <div>
      <Head>
        <title>Ma collection</title>
      </Head>
      {openModal && (<Modal open={openModal} setOpen={setOpenModal}>
        <img src="/cuteCat.svg" alt="cute cat" className="cuteCat"/>
        <div className="sure">Es-tu sur de vouloir supprimer {infoModal.name} tome {infoModal.tomeInitial} à {infoModal.tomeFinal} ?</div>
        {cantDelete && (<div className="care">Attention ta collection est en cours de location ou va être loué, archive ton annonce pour la rendre indisponible à d'autres locations en attendant !</div>)}
        <div className="buttonsContainer">
          <Button color="Transparent" functionOnClick={() => setOpenModal(false)}>Annuler</Button>
          <Button color="Red" functionOnClick={() => {cantDelete ? archProduct() : suppProduct()}}>{cantDelete ? 'Archiver' : 'Supprimer'}</Button>
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
