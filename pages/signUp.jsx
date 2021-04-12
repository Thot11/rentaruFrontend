/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { postSignUp } from "../store";
import Step1 from "../components/signUpStep/Step1";

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
        <Step1 mail={mail} setMail={setMail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
        username
        <input
          type="text"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        prenom
        <input
          type="text"
          defaultValue={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        nom
        <input
          type="text"
          defaultValue={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        adresse
        <input
          type="text"
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        ville
        <input
          type="text"
          defaultValue={ville}
          onChange={(e) => setVille(e.target.value)}
        />
        departement
        <input
          type="number"
          defaultValue={departement}
          onChange={(e) => setDepartement(e.target.value)}
        />
        telephone
        <input
          type="tel"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        
        Photo de profil
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <div onClick={signUp}>Submit</div>
        <Link href={"/login"}> Connexion </Link>
      </div>
    </div>
  );
};

export default SignUp;
