/* eslint-disable prettier/prettier */
import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";
import CardProduct from "./CardProduct";

const ProductsList = ({ products, user, maxLength, notWantedProductId, filterBy, elementFiltered}) => {
  
  return (
    <div className="productsContainers">
      {(filterBy === undefined || filterBy === '') && products.map((_product, key) => (
        _product.id !== notWantedProductId && (key < maxLength || maxLength === undefined) &&  
        <CardProduct product={_product} key={key} user={_product.user.username ? _product.user : user ?? _product.user}/>
      ))}
      {filterBy && filterBy !== '' && products.map((_product, key) => (
        ((elementFiltered === 'manga' &&_product.title.toLowerCase().includes(filterBy.toLowerCase())) || (elementFiltered === 'member' &&_product.user.username.toLowerCase().includes(filterBy.toLowerCase())))  &&  
        <CardProduct product={_product} key={key} user={_product.user.username ? _product.user : user  ?? _product.user}/>
      ))}
    </div>
  );
};

export default ProductsList;
