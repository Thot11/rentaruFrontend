/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { getProductsPublished } from "../utils/api";
import ProductsList from "../components/ProductsList";
import { getStrapiMedia } from "../utils/medias";
import CheckBox from "../elements/CheckBox";
import Link from "next/link";
import DropDown from "../elements/DropDown";

const SearchPage = ({ products }) => {

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading products...</div>;
  }

  const [elementSearched, setElementSearched] = useState('');
  const [elementFiltered, setElementFiltered] = useState('manga');

  useEffect(() => {
    const {
      query: { title }
    } = router
    if (title) setElementSearched(title);
    else setElementSearched('');
  }, [router])

  return (
    <div className="searchPage">      
      <Head>
        <title>Rent Page paiement </title>
      </Head>
      <div className="searchContainer">
        <h1 className='h1'>Recherche un manga par catégorie</h1>
        <div className="searchWrapper">
          <div className="searchHeader">    
            <div className='search'>
              <img src="/search.png" alt="Search" />
              <input placeholder="Rechercher un manga, un auteur, un genre" value={elementSearched} onChange={(e) => setElementSearched(e.target.value)} />
            </div>
            <div className="filterBy">
              <button className={elementFiltered === 'manga' ? 'buttonSelected' : ''} onClick={() => setElementFiltered('manga')}>
                Manga
              </button>
              <button className={elementFiltered === 'author' ? 'buttonSelected' : ''} onClick={() => setElementFiltered('author')}>
                Auteur
              </button>
              <button className={elementFiltered === 'member' ? 'buttonSelected' : ''} onClick={() => setElementFiltered('member')}>
                Membre
              </button>
            </div>
          </div>  
        </div>
        <div className="results">
          <p className='labelResult'>Résultats d’annonces "{elementSearched}"</p>
          <ProductsList products={products} filterBy={elementSearched} elementFiltered={elementFiltered} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

export async function getStaticProps() {
  const products = await getProductsPublished();
  return { props: { products } };
}
