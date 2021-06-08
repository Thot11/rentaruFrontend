/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import Button from "../elements/Button";
import { getAboutPage } from "../utils/api";
import { getStrapiMedia } from "../utils/medias";

const About = ({about}) => {
  return (
    <div>
      <Head>
        <title>A propos</title>
      </Head>
      <div className="aboutContainer">
        <div className="header">
          <div className="backgroundContainer">
            <div className="filter"></div>
            <img src={getStrapiMedia(about.banner[0].url)} alt="background" className='background'/>
          </div>
          {/* <h1 className="h1">{about.title} </h1> */}
        </div>
        <div className="storyContainer">
          <h1 className="h1">{about.title} </h1>
          <p className='story'>{about.story}</p>
        </div>
        <div className="cardsContainer">
          {about.cards.map((card, key) => {
            return (
              <div className="card" key={key}>
                <img src={getStrapiMedia(card.image[0].url)} alt="online"/>
                <h3>{card.titleCard}</h3>
                <p>{card.descriptionCard}</p>
              </div>
            )
          })}
        </div>
        {/* <div className="storyContainer">
          <p className='story storyFeedback'>{about.storyFeedback}</p>
        </div> */}
        <div className="ecoloBullshitContainer">
          <div className="text">
            <h2>{about.titleEcoloBullshit}</h2>
            <p className="descriptionEcolo">{about.textEcoloBullshit}</p>
          </div>
          {/* <img src={getStrapiMedia(about.imageEcoloBullshit.url)} alt="ecolo" /> */}
        </div>
        {/* <div className="engagementBullshitContainer">
          <img src={getStrapiMedia(about.imageEngagementBullshit.url)} alt="engagement" />
          <div className="text">
            <h2>{about.titleEngagementBullshit}</h2>
            <p className="descriptionEcolo">{about.textEngagementBullshit}</p>
          </div>
        </div> */}
        <div className="crewContainer">
          <h2>{about.titleCrew}</h2>
          <div className="membersContainer">
          {about.crew.map((member, key) => {
            return (
              <div className="member" key={key}>
                <img src={getStrapiMedia(member.imageMember.url)} alt="online"/>
                <h3>{member.nameMember}</h3>
                <p>{member.jobMember}</p>             
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const about = await getAboutPage();
  return { props: { about } };
}

export default About;
