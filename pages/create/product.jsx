/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Step1 from "../../components/createProductStep/Step1";
import Step2 from "../../components/createProductStep/Step2";
import Step3 from "../../components/createProductStep/Step3";
import Step4 from "../../components/createProductStep/Step4";
import Step5 from "../../components/createProductStep/Step5";
import PreviewProduct from "../../components/createProductStep/PreviewProduct";
import { postProduct } from "../../store";
import { postNewManga } from "../../utils/api";
import Button from "../../elements/Button";
import Link from "next/link";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { session, user, createdProduct, errorState } = useSelector(
    (state) => state
  );

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  const [step, setStep] = useState(1);
  const [data, setData] = useState();
  const [preview, setPreview] = useState();
  const [mangaId, setMangaId] = useState(true);

  useEffect(() => {
    if (
      createdProduct &&
      createdProduct.slug &&
      errorState.type !== "createProduct"
    ) {
      router.push({ pathname: "/" });
    }
  }, [createdProduct]);

  useEffect(() => {
    if (step === 6) {
      const formData = new FormData();

      if (data.images?.length > 0) {
        data.images.forEach((file) => {
          formData.append(`files.images`, file, file.name);
        });
        delete data.images;
      }
      formData.append("data", JSON.stringify(data));
      dispatch(postProduct(formData, session, mangaId));
    }
    router.push({ pathname: "/create/product", query: `step${step}` });
  }, [step]);

  return (
    <div className="createProductContainer">
      <Head>
        <title>Créer votre annonce</title>
      </Head>
      <div className="topContainer">
        <div className="stepCount">{step}/6</div>
        <h2>Création d'une annonce</h2>
      </div>

      <div className="middleContainer">
        <div className="step">
          {(() => {
            switch (step) {
              case 1:
                return (
                  <Step1
                    step={step}
                    setStep={setStep}
                    user={user}
                    data={data}
                    setData={setData}
                    preview={preview}
                    setPreview={setPreview}
                    session={session}
                    mangaId={mangaId}
                    setMangaId={setMangaId}
                  />
                );
              case 2:
                return (
                  <Step2
                    step={step}
                    setStep={setStep}
                    user={user}
                    data={data}
                    setData={setData}
                    preview={preview}
                    setPreview={setPreview}
                  />
                );
              case 3:
                return (
                  <Step3
                    step={step}
                    setStep={setStep}
                    user={user}
                    data={data}
                    setData={setData}
                    preview={preview}
                    setPreview={setPreview}
                  />
                );
              case 4:
                return (
                  <Step4
                    step={step}
                    setStep={setStep}
                    user={user}
                    data={data}
                    setData={setData}
                    preview={preview}
                    setPreview={setPreview}
                  />
                );
              case 5:
                return (
                  <Step5
                    step={step}
                    setStep={setStep}
                    user={user}
                    data={data}
                    setData={setData}
                    preview={preview}
                    setPreview={setPreview}
                  />
                );
              case 6:
                return errorState.type === "createProduct" ? (
                  <div>{errorState.message}</div>
                ) : (
                  <div className="finalStep">
                    Ajout de votre annonce en cours...
                  </div>
                );
              default:
                return (
                  <Step1
                    step={step}
                    setStep={setStep}
                    user={user}
                    data={data}
                    setData={setData}
                  />
                );
            }
          })()}
        </div>
        <div className="preview">
          {preview && <PreviewProduct data={preview} user={user} />}
        </div>
      </div>
      <div className="bottomContainer">
          {step === 4 ? (
            <div className="first">
              Prix définit sur une durée de <span className="bold">14 jours </span> garantissant un temps de lecture optimale <br /> <br /> Entre : 0.80€ - 2€ le tome
            </div>
          ) : (
            <div className="first">
              Loue en toute sécurité ta collection et rentabilise là. Les locations sont soumises à une caution pour le lecteur, ta collection est donc assurée !
            </div>
          )}
        <div className="second">
          <span className="bold">Petit Tips : </span> Retire les couvertures de tes mangas afin de préserver leur valeurs !
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
