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
      <Link href={`/manga/${mangaCollection.id}`}>
        <a>
          <img src={getStrapiMedia(mangaCollection.cover.url)} alt="cover"/>
          <div className="info">
            <div className="position">
              {position}
            </div>
            <div className="upperInfo">
              <div className="titles">
                <h3>{mangaCollection.title}</h3>
                <p>{mangaCollection.author} </p>
              </div>
            </div>
            <div className="downerInfo">
              
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardProductTrending;
