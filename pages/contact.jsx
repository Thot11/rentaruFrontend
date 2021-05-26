/* eslint-disable prettier/prettier */
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com'
import apiKeys from '../utils/apikeys'

const Contact = ({}) => {
  
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mail, setMail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const form = document.querySelector('.form')
    form.addEventListener('submit',sendEmail)
  }, []);

  const sendEmail = e => {
    e.preventDefault()
    emailjs
    .sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then(
      result => {
        console.log(result.text)
        setSubmitMessage('Sucess')
      },
      error => {
        setSubmitMessage('Error')
        console.log(error.text)
      }
    )
    setLastName('');
    setFirstName('');
    setMail('');
    setObject('');
    setMessage('');
  }

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="contactContainer">
        <h1 className="h1">Contact</h1>
        <form action="" method='POST' className="form formContainer">
          <p>Poour toute demande, remplir le formulaire ci-dessous.</p>
          <div className="inputsWrapper">
            <div>
              <input name={'firstName'} value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Prénom'></input>
              <input name={'lastName'} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Nom'></input>
            </div>
            <div>
              <input name={'mail'} value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Mail'></input>
              <input name={'object'} value={object} onChange={(e) => setObject(e.target.value)} placeholder='Objet'></input>
            </div>
          </div>
          <textarea name={'message'} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message'></textarea>
          <input type='submit' className="submit" value='Envoyer'></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
