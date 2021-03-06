/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { getStrapiMedia } from "../utils/medias";

const CardProductSearch = ({ mangaCollection, key }) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { session } = state;

  useEffect(() => {
  }, [])

  return (
    <div className="cardProductSearch" key={key}>
      <img src={mangaCollection.cover ? getStrapiMedia(mangaCollection.cover.url) : '/cuteCat.svg'} alt="cover"/>
      <div className="info">
        <div className="upperInfo">
          <div className="titles">
            <h3>{mangaCollection.title}</h3>
          </div>
        </div>
        <div className="categories">
          {mangaCollection.categories.map((_category) => {
            <div className="label">{_category.title}</div>
          })}
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

export default CardProductSearch;
