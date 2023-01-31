import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { FaClipboardCheck, FaClipboard } from "react-icons/fa";
import Image from "next/image";
import { path } from "@/config";

const Footer = () => {
  const form = useRef();
  const [textCopy, setTextCopy] = useState(false);
  const [sendStatut, setSendStatut] = useState(false);
  const [error, setError] = useState(false);
  const [copyClipboard, setCopyClipboard] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendStatut(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
    e.target.reset();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("thomas.viei@hotmail.fr");
    setCopyClipboard(true);
    setTextCopy(true);
  };

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => setTextCopy(false), 2000);
    return () => clearTimeout(timeout);
  }, [textCopy]);

  return (
    <div className="footer-global-container">
      <div className="footer-content-container">
        <h3 id="contact">Me contacter</h3>
        <div className="content__mailCC" onClick={() => handleCopy()}>
          {textCopy ? (
            <p
              style={
                copyClipboard ? { color: "#5ca960" } : { color: "#d9d9d9" }
              }
            >
              Copié dans le presse papier !
            </p>
          ) : (
            <p
              style={
                copyClipboard ? { color: "#5ca960" } : { color: "#d9d9d9" }
              }
            >
              thomas.viei@hotmail.fr
            </p>
          )}

          {copyClipboard ? (
            <FaClipboardCheck id="content__mailCC--check" />
          ) : (
            <FaClipboard id="content__mailCC--copy" />
          )}
        </div>
        <form ref={form} onSubmit={(e) => sendMail(e)}>
          <label htmlFor="mailInput">Email</label>
          <input
            type="email"
            placeholder="prenom@nom.fr"
            id="mailInput"
            name="mailInput"
            required
          />
          <label htmlFor="messageInput">Message</label>
          <textarea
            name="messageInput"
            placeholder="Votre message"
            id="messageInput"
            required
          ></textarea>

          {sendStatut ? (
            <Alert
              style={{ transition: "0.4s", margin: "1em 0" }}
              onClose={() => setSendStatut(false)}
            >
              Votre message a été envoyé. Merci !
            </Alert>
          ) : (
            ""
          )}

          {error ? (
            <Alert
              style={{ transition: "0.4s", margin: "1em 0" }}
              onClose={() => setError(false)}
              severity="error"
            >
              Une erreur est survenue. Merci de vérifier les informations
              renseignées.
            </Alert>
          ) : (
            ""
          )}

          <input type="submit" value="ENVOYER" />
        </form>
        <div className="footer-content__like">
          <p>
            Site réalisé à la main, aucune donnée n'est collectée. L'entiereté
            du code est disponible sur mon GitHub.
          </p>
        </div>
        <div className="footer-content__realisation">
          <p>Site réalisé avec</p>
          <Image
            src={path + "/img/nextJS-logo-text.png"}
            alt="logo nextjs"
            width={62}
            height={42}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
