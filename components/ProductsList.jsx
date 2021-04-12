import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";
import CardProduct from "./cardProduct";

const ProductsList = ({ products, user }) => {
  
  console.log('products :', products);
  return (
    <div className="productsContainers">
      {products.map((_product, key) => (
        <CardProduct product={_product} key={key} user={_product.user.username ? _product.user : user}/>
      ))}
    </div>
  );
};

export default ProductsList;
