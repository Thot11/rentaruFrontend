/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import Button from "../elements/Button";
import { getCglPage } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";

const Cgl = ({cgl}) => {
  return (
    <div>
      <Head>
        <title>Mentions</title>
      </Head>
      <div className="container">
          <h1 className="h1">{cgl.title}</h1>
          <p className="mentionsText">{cgl.content}</p>
    </div>
    </div>
  );
};

export async function getStaticProps() {
  const cgl = await getCglPage();
  return { props: { cgl } };
}

export default Cgl;
