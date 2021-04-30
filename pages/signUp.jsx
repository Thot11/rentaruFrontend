/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { postSignUp } from "../store";
import Step1 from "../components/signUpStep/Step1";
import Step2 from "../components/signUpStep/Step2";
import Step3 from "../components/signUpStep/Step3";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { session } = useSelector((state) => state);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ville, setVille] = useState("");
  const [departement, setDepartement] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [step, setStep] = useState(1);

  const signUp = () => {
    if (password === confirmPassword) {
      dispatch(
        postSignUp(
          mail,
          password,
          ville,
          departement,
          prenom,
          nom,
          phone,
          username,
          address,
          selectedFile
        )
      );
    }
  };

  useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

  return (
    <div>
      <Head>
        <title>SignUp</title>
      </Head>
      <div className="signInContainer">
        <img className="background" src="/japBckg.svg" alt="background"/>
        {step === 1 && <Step1 setStep={setStep} mail={mail} setMail={setMail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} /> }
        {step === 2 && <Step2 setStep={setStep} nom={nom} setNom={setNom} prenom={prenom} setPrenom={setPrenom} phone={phone} setPhone={setPhone} username={username} setUsername={setUsername} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />}
        {step === 3 && <Step3 signUp={signUp} adresse={address} setAddress={setAddress} ville={ville} setVille={setVille} departement={departement} setDepartement={setDepartement} />}
        {/* <Link href={"/login"}> Connexion </Link> */}
      </div>
    </div>
  );
};

export default SignUp;
