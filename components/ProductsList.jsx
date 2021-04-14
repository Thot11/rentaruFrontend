/* eslint-disable prettier/prettier */
import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";
import CardProduct from "./CardProduct";

const ProductsList = ({ products, user, maxLength, notWantedProductId }) => {

  console.log(notWantedProductId)
  return (
    <div className="productsContainers">
      {products.map((_product, key) => (
        _product.id !== notWantedProductId && (key < maxLength || maxLength === undefined) &&  
        <CardProduct product={_product} key={key} user={_product.user.username ? _product.user : user}/>
      ))}
    </div>
  );
};

export default ProductsList;
