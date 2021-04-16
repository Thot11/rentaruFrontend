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

const deliveryModes = [
  'Main propre',
  'Point relais',
  'Livraison'
]

const filters = [
  'Les plus récentes',
  'Les moins récentes',
]

const SearchPage = ({ products }) => {

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading products...</div>;
  }

  const [elementSearched, setElementSearched] = useState('');
  const [elementFiltered, setElementFiltered] = useState('manga');
  const [advanceFiltersOpen, setAdvanceFiltersOpen] = useState(false);
  const [isTomesFiltered, setIsTomeFiltered] = useState(false);
  const [isCityFiltered, setIsCityFiltered] = useState(false);
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);  
  const [deliveryMode, setDeliveryMode] = useState(0);
  const [isDeliverySelectOpen, setIsDeliverySelectOpen] = useState(false);
  const [isFilteredBy, setIsFilteredBy] = useState(false);
  const [isFilersSelectOpen, setIsFiltersSelectOpen] = useState(false);
  const [filterSelected, setFilterSelected] = useState(0);

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
          <div className="advanceParam">
            <div className="titleAdvance" onClick={() => setAdvanceFiltersOpen(!advanceFiltersOpen)}>
              <p>Recherche avancée</p>
              <img src="/bigArrow.svg" alt="arrow"/>
            </div>
            {advanceFiltersOpen &&
              <div className="advanceFilters">
                <div className="advanceFilter">
                  <div className="label">
                    <CheckBox checked={isTomesFiltered} setChecked={setIsTomeFiltered} info={true} resetInfo={false} />
                    <p className="labelText">A partir du tome</p>
                  </div>
                  <div className="tomes">
                    <input type="number" defaultValue={1} />
                    <p>à</p>
                    <input type="number" defaultValue={10} />
                  </div>
                </div>
                <div className="advanceFilter">
                  <div className="label">
                    <CheckBox checked={isCityFiltered} setChecked={setIsCityFiltered} info={true} resetInfo={false} />
                    <p className="labelText">Zone Geographique</p>
                  </div>
                  <input type="text" placeholder='Paris' />
                </div>
                <div className="advanceFilter">
                  <div className="label">
                    <CheckBox checked={isDeliveryFiltered} setChecked={setIsDeliveryFiltered} info={true} resetInfo={false} />
                    <p className="labelText">Mode de livraison</p>
                  </div>
                  <div className="select">
                    <div className="selectedOption">
                      <p className="optionSelected">{deliveryModes[deliveryMode]}</p>
                      <img src="/bigArrow.svg" alt="arrow" onClick={() => setIsDeliverySelectOpen(!isDeliverySelectOpen)} />
                    </div>
                    {isDeliverySelectOpen && 
                      <div className="options">
                        {deliveryModes.map((option, key) => {
                          if(key !== deliveryMode) {
                            return (
                              <p className="option" key={key} onClick={() => {setDeliveryMode(key); setIsDeliverySelectOpen(false)}}>{option}</p>
                            )
                          }
                          else {
                            return null;
                          }                        
                        })}
                      </div>
                    }
                  </div>
                </div>
                <div className="advanceFilter">
                  <div className="label">
                    <CheckBox checked={isFilteredBy} setChecked={setIsFilteredBy} info={true} resetInfo={false} />
                    <p className="labelText">Trier par</p>
                  </div>                  
                  <div className="select">
                    <div className="selectedOption">
                      <p className="optionSelected">{filters[filterSelected]}</p>
                      <img src="/bigArrow.svg" alt="arrow" onClick={() => setIsFiltersSelectOpen(!isFilersSelectOpen)} />
                    </div>
                    {isFilersSelectOpen && 
                      <div className="options">
                        {filters.map((option, key) => {
                          if(key !== filterSelected) {
                            return (
                              <p className="option" key={key} onClick={() => {setFilterSelected(key); setIsFiltersSelectOpen(false)}}>{option}</p>
                            )
                          }
                          else {
                            return null;
                          }                        
                        })}
                      </div>
                    }
                  </div>
                </div>
              </div>
            }
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
