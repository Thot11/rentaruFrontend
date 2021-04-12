import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";
import CardProduct from "./CardProduct";

const ProductsList = ({ products, user }) => {
  
  return (
    <div className="productsContainers">
      {products.map((_product, key) => (
        <CardProduct product={_product} key={key} user={_product.user.username ? _product.user : user}/>
      ))}
    </div>
  );
};

export default ProductsList;
