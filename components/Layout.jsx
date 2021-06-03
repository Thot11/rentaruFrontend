import Link from "next/link";
import { useState } from "react";
import Button from "../elements/Button";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children, categories }) => {

  const [openFloating, setOpenFloating] = useState(false)

  const router = useRouter()


  return (
    <div>
      <div className="mainContainer">
        <Navbar />
        <div>{children}</div>
        {router.pathname !== '/contact' && (
          <div className="floatingBtn">
            <div className="floatingTrigger" onClick={() => setOpenFloating(!openFloating)} >
              <img src="/chevronWhite.svg" alt="" className={`chevron ${openFloating ? 'show' : 'hide'}`} />
              <img src="/discuss.svg" alt="" className={`discuss ${!openFloating ? 'show' : 'hide'}`}/>
            </div>
            <div className={`infoBeta ${openFloating ? 'show' : 'hide'}`} >
              <div className="header">
                <img src="/logoBeta.svg" alt="logo rentaru" />
              </div>
              <div className="body">
                <div className="title">Bonjour 👋</div>
                <div className="message">
                  Rentaru est une plateforme <span className="bold">en cours de développement</span>. Elle est encore loin d’être parfaite ! Pour <span className="bold">tout problème, bug, retour, ou conseil</span> à nous faire n’hésitez pas à nous envoyer un message via le formulaire. <br /> Merci d'avance 😘 
                </div>
                <div className="cta">
                  <Link href="/contact">
                    <a>
                      <Button color='Red'>Envoyer un retour</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) }
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
