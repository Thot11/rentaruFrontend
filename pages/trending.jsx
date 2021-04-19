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

const TrendingPage = ({ products }) => {

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="trendingPage">      
      <Head>
        <title>Tendance </title>
      </Head>
    </div>
  );
};

export default TrendingPage;

export async function getStaticProps() {
  const products = await getProductsPublished();
  return { props: { products } };
}
