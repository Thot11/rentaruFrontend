/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";
import { getProductsPublished, getMangaCollection } from "../utils/api";
import CardProductTrending from "../components/CardProductTrending";

const TrendingPage = ({ products }) => {


  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading products...</div>;
  }

  const { session } = useSelector((state) => state);
  const [mangaCollection, setMangaCollection] = useState([])

  useEffect(() => {
    getMangaList()
  }, [session])

  const getMangaList = () => {
    getMangaCollection(session).then(resp => {
      if (!resp.error) setMangaCollection(resp)
    }).catch(()=> console.log('error'))
  }

  return (
    <div className="trendingPage">
      <Head>
        <title>Tendance </title>
      </Head>
      <h1 className="h1">Les tops de nos lecteurs</h1>
      <div className="top">
        <h3>Top des lecteurs</h3>
        <div className="slider">
          {mangaCollection.map((manga, key) => {
            return (
              <CardProductTrending mangaCollection={manga} key={key} position={key + 1} />
            )
          })}
        </div>
      </div>
      
    </div>
  );
};

export default TrendingPage;

export async function getStaticProps() {
  const products = await getProductsPublished();
  return { props: { products } };
}
