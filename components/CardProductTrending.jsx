/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { getStrapiMedia } from "../utils/medias";

const CardProductTrending = ({ mangaCollection, key, position }) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { session } = state;

  useEffect(() => {
  }, [])

  return (
    <div className="cardProductTrending" key={key}>
      <img src={mangaCollection.cover ? getStrapiMedia(mangaCollection.cover.url) : '/cuteCat.svg'} alt="cover"/>
      <div className="info">
        <div className="position">
          {position}
        </div>
        <div className="upperInfo">
          <div className="titles">
            <h3>{mangaCollection.title}</h3>
          </div>
        </div>
        <Link href={`/manga/${mangaCollection.id}`}>
          <a>
            <div className="downerInfo">
              Voir les annonces ({mangaCollection.products.length})
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardProductTrending;
