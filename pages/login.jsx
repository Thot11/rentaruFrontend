/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { postConnect, logOut } from "../store";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { session } = useSelector((state) => state);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session) router.push("/");
  }, [session]);

  const connect = (mail, password) => {
    dispatch(postConnect(mail, password));
  };

  const disconnect = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="loginContainer">
        <img className="background" src="/japBckg.svg" alt="background"/>
        <h2>Renseignez vos identifiants</h2>
        <div className="loginWrapper">
          <h3>Connexion</h3>
          <input
            type="text"
            defaultValue={mail}
            placeholder='E-mail'
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Mot de passe'
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="rememberMe">
            <p>Se souvenir de moi ?</p>
            <input type="checkbox"/>
          </div>
          <button className="btnUnderline">Mot de passe oublié ?</button>
          <div className="buttons">
            <button onClick={() => connect(mail, password)}>Connexion</button>
            <button><Link href={"/signUp"}> Inscription </Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
