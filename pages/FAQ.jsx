/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import Button from "../elements/Button";
import Dropdown from "../elements/DropDown";
import { useEffect, useState } from "react";
import { getFaqPage } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";

const Faq = ({faq}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div>
      <Head>
        <title>Foire aux questions</title>
      </Head>
      <div className="container">
        <h1 className="h1">{faq.title}</h1>
        <div className="row">
          <div className="left">
            {faq.theme.map((question, index) => {
              return (
                <div className={`theme ${index === selectedIndex ? 'selected' : ''}`} onClick={() => setSelectedIndex(index)}>{question.questionTheme}</div>
              )
            })}
          </div>
          <div className="right">
            {faq.theme[selectedIndex].question.map((soloQuestion, index) => {
              return (
                <Dropdown key={`${soloQuestion.titleQuestion}-${index}`} title={soloQuestion.titleQuestion} color="Dark">
                  {soloQuestion.answerQuestion}
                </Dropdown>
              )
            })}
          </div>
        </div>
    </div>
    </div>
  );
};

export async function getStaticProps() {
  const faq = await getFaqPage();
  return { props: { faq } };
}

export default Faq;
