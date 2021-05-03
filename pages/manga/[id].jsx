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

  const [synopsisOpen, setSynopsisOpen] = useState(false);

  return (
    <div className="mangaPage">
      <Head>
        <title>{manga.title} </title>
      </Head>
      <div className="mangaInfo">
        <img src={getStrapiMedia(manga.cover.url)} alt="cover" className="cover"/>
        <div className="rightContainer">
          <div className="header">
            <h2>{manga.title}</h2>
            <div className="ranking">
              <h3>n°3</h3>
              <p className="label">Classement top des lecteurs</p>
            </div>
          </div>
          <div className="info">
            <p className="label">Dessinateur</p>
            <p className="answer">{manga.artist}</p>
          </div>
          <div className="info">
            <p className="label">Scénariste</p>
            <p className="answer">{manga.scenarist}</p>
          </div>
          <div className="info">
            <p className="label">Année de création</p>
            <p className="answer">{manga.year}</p>
          </div>
          <div className="info infoCatégories">
            <p className="label">Catégories</p>
            <p className="answer">
              {manga.categories.map((category) => {
                return (
                  `#${category.slug} `
                )
              })}
            </p>
          </div>
          <div className="info">            
            <p className="label">Nombre de tomes</p>
            <div>
              <div className="frenchVolumes">
                <p className="answer">{manga.frenchVolumes} <img src="/frenchFlag.png" alt="frenchFlag"/> ({manga.frenchParutionOver ? 'Terminé' : 'En cours'})</p>
              </div>
              <div className="japVolumes">
                <p className="answer">{manga.japVolumes} <img src="/japFlag.png" alt="japFlag"/> ({manga.japParutionOver ? 'Terminé' : 'En cours'})</p>
              </div>
            </div>
          </div>
          <div className="info infoSynopsis">
            <p className="label">Synopsis</p>
            <p className={synopsisOpen ? "answer answerOpen" : "answer"}>{manga.synopsis}</p>
            <p className="seemore" onClick={() => setSynopsisOpen(!synopsisOpen)}>{synopsisOpen ? 'Voir moins...' : 'Voir plus...'}</p>
          </div>
          <div className="links">
            {manga.links.map((link) => {
              console.log(manga.categories)
              return (
                <a href={link.link} className='link'>Lien sens critique</a>
              )
            })}
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

