/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import Button from "../elements/Button";
import { getCguPage } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";

const Cgl = ({cgu}) => {
  return (
    <div>
      <Head>
        <title>Mentions</title>
      </Head>
      <div className="container">
          <h1 className="h1">{cgu.title}</h1>
          <p className="mentionsText" dangerouslySetInnerHTML={{__html: cgu.content}}></p>
    </div>
    </div>
  );
};

export async function getStaticProps() {
  const cgu = await getCguPage();
  return { props: { cgu } };
}

export default Cgl;
