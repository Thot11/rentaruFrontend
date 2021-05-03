/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getManga, getMangaCollection } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";


const MangaPage = ({ manga }) => {


  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading products...</div>;
  }
  return (
    <div className="trendingPage">
      <Head>
        <title>{manga.title} </title>
      </Head>
      <div className="mangaInfo">
        <img src={getStrapiMedia(manga.cover.url)} alt="" className="cover"/>
        <div className="rightContainer">
          <div className="header">
            <h2>{manga.title}</h2>
            <div className="ranking"></div>
          </div>
          <div className="info">
            <p className="label">Dessinateur</p>
            <p className="answer">{manga.author}</p>
          </div>
          <div className="info">
            <p className="label">Scénariste</p>
            <p className="answer">{manga.author}</p>
          </div>
          <div className="info">
            <p className="label">Année de création</p>
            <p className="answer">{manga.author}</p>
          </div>
          <div className="info">
            <p className="label">Catégories</p>
            <p className="answer">{manga.author}</p>
          </div>
          <div className="info">
            <p className="label">Nombre de tomes</p>
            <p className="answer">{manga.author}</p>
          </div>
          <div className="info infoSynopsis">
            <p className="label">Synopsis</p>
            <p className="answer">{manga.author}</p>
          </div>
          <div className="links">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaPage;

export async function getStaticProps({ params }) {
  const manga = await getManga(params.id);
  return { props: { manga } };
}

export async function getStaticPaths() {
  const mangas = await getMangaCollection();
  return {
    paths: mangas.map((_manga) => {
      return {
        params: { id: _manga.id.toString() },
      };
    }),
    fallback: true,
  };
}

