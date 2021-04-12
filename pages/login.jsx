import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { postConnect, logOut } from '../store'

const Login = () => {

  const dispatch = useDispatch();
  const router = useRouter()
  const { session } = useSelector((state) => state);

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (session) router.push('/')
  }, [session])
  
  const connect = (mail, password) => {
    dispatch(postConnect(mail, password))
  }

  const disconnect = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <input type="text" defaultValue={mail} onChange={(e) => setMail(e.target.value)} />
      <input type="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
      <div onClick={() => connect(mail, password)}>Submit</div>
      <div onClick={disconnect}>Log Out</div>
      <Link href={'/signUp'}> Inscription </Link>
    </div>
  );
};



export default Login;