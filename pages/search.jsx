/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { getProductsPublished, getCategories, getMangaCollection } from "../utils/api";
import ProductsList from "../components/ProductsList";
import { getStrapiMedia } from "../utils/medias";
import CheckBox from "../elements/CheckBox";
import Link from "next/link";
import DropDown from "../elements/DropDown";
import CardProductSearch from "../components/CardProductSearch";

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

  const [productsFiltered, setProductFiltered] = useState(products);

  const [elementSearched, setElementSearched] = useState('');
  const [elementFiltered, setElementFiltered] = useState('manga');

  const [categories, setCategories] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  const [changes, setChanges] = useState(false);

  useEffect(() => {
    const {
      query: { title }
    } = router
    if (title) setElementSearched(title);
    else setElementSearched('');
  }, [router])

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
      console.log(res[0].slug);
    })
  }, [])

  const changeSelectedCategories = (slug) => {
    const newArray = categoriesSelected;
    if(categoriesSelected.includes(slug)) {
      let index = -1;
      categoriesSelected.forEach((_category, key) => {
        if(_category.slug === slug) {
          index = key;
        }
      })
      newArray.splice(index, 1)
    }
    else {
      newArray.push(slug);
    }
    setCategoriesSelected(newArray)
    setChanges(!changes);
  }

  useEffect(() => {
    let newProductList = products;
    if(categoriesSelected.length > 0) {
      newProductList = []
      products.forEach((_product) => {
        let index = _product.categories.findIndex(e => categoriesSelected.includes(e.slug));
        console.log(index)
        if(index !== -1) {
          newProductList.push(_product);
        }
      })
      console.log(newProductList)
    }
    setProductFiltered(newProductList);
  }, [categoriesSelected, changes])

  return (
    <div className="searchPage">      
      <Head>
        <title>Recherche</title>
      </Head>
      <div className="searchContainer">
        <div className="searchWrapper">
          {categories.map((_category, key) => {
            return (
              <div className="categoryContainer">
                <CheckBox checked={categoriesSelected.includes(_category.slug)} click={() => changeSelectedCategories(_category.slug)}/>
                {_category.name}
              </div>
            )
          })}
        </div>
        <div className="results">
          <div className="productList">
            {productsFiltered.map((_product, key) => {
              // {console.log(_product)}
              return (
                <CardProductSearch mangaCollection={_product} key={key} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

export async function getStaticProps() {
  const products = await getMangaCollection();
  return { props: { products } };
}
