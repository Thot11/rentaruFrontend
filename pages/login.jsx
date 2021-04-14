/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { postConnect, logOut } from "../store";
import Button from "../elements/Button";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { session, errorState } = useSelector((state) => state);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session) router.push("/");
  }, [session]);

  const connect = (mail, password) => {
     dispatch(postConnect(mail, password));
  };

  console.log(errorState);

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
            className="inputText"
            type="text"
            defaultValue={mail}
            placeholder='E-mail'
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            className="password inputText"
            type="password"
            placeholder='Mot de passe'
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorState.type === "connect" && (<p className="error">{errorState.message}</p>)}
          <div className="rememberMe">
            <p>Se souvenir de moi ?</p>
            <input type="checkbox"/>
          </div>
          <button className="btnUnderline">Mot de passe oublié ?</button>
          <div className="buttons">
            <Button color={'Red'} functionOnClick={() => connect(mail, password)}>Connexion</Button>
            <Link href={"/signUp"}>
              <a>
                <Button color={'White'}>Inscription </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
