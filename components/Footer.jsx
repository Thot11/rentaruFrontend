import Link from "next/link";
import Button from "../elements/Button";

const Footer = () => {

  const year = new Date()

  return (
    <div className="footer">
      <div className="top">
        <div className="linkContainer">
          <div className="title">
            En savoir plus
          </div>
          <Link href="/landing">
            <a className="linkElement">
              Comment ça marche ? 
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Carrière
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Presse
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Centre d'aide
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Contactez nous
            </a>
          </Link>
        </div>

        <div className="linkContainer">
          <div className="title">
            Aide
          </div>
          <Link href="/">
            <a className="linkElement">
              Débuter sur Rentaru
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Paiement et transfert
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Presse
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Envoi
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Confiance et sécurité
            </a>
          </Link>
        </div>

        <div className="linkContainer">
          <div className="title">
            Politique
          </div>
          <Link href="/">
            <a className="linkElement">
              Confiance et Sécurité
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Politique et Confidentialité
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Termes et Conditions
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Politique de cookies
            </a>
          </Link>
          <Link href="/">
            <a className="linkElement">
              Paramètres des cookies
            </a>
          </Link>
        </div>

        <div className="linkContainer">
          <div className="title">
            Communauté
          </div>
          <a href="https://discord.gg/VJmCrVPNA4" className="linkElement">
            Notre discord
          </a>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <a href="https://discord.gg/VJmCrVPNA4" className="linkElement">
            <img src="/discord.svg" alt="discord"/> 
          </a>
          <a href="https://www.instagram.com/rentaru.france/?hl=fr" className="linkElement">
            <img src="/insta.svg" alt="insta"/> 
          </a>
          <a href="https://discord.gg/VJmCrVPNA4" className="linkElement">
            <img src="/twitter2.svg" alt="twitter"/> 
          </a>
        </div>
        <div className="right">
          &copy; All Right Reserved Rentaru {year.getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
