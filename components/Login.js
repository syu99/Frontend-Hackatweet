import React, { useState } from "react";
// import modal + useState
import styles from "../styles/Login.module.css";
import Modal from "./Modal";

//Ajout de l'état pour gérer l'affichage du composant Modal et le type de connexion (SignIn ou SignUp) :
function Login() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  // Fonction qui change le type de modal à afficher et l'affiche lors du clic sur le bouton "Sign In"
  const handleSignInClick = () => {
    setModalType("SignIn");
    setShowModal(true);
  };
  // Fonction qui change le type de modal à afficher et l'affiche lors du clic sur le bouton "Sign Up"
  const handleSignUpClick = () => {
    setModalType("SignUp");
    setShowModal(true);
  };
  // Fonction qui ferme le modal lors du clic sur la croix ou en dehors du contenu du modal
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftBackground}>
        <img
          className={styles.leftLogo}
          src="/twitter-logo-reverse.png"
          alt="Twitter Logo"
        />
      </div>
      <div className={styles.rightBackground}>
        <img
          className={styles.logo}
          src="/twitter-logo-reverse.png"
          alt="Twitter Logo"
        />
        <h1 className={styles.title}>
          See What’s <br />
          happening
        </h1>
        <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
        <button
          className={`${styles.baseButton} ${styles.signupBtn}`}
          onClick={handleSignUpClick}
        >
          Sign up
        </button>
        <h3 className={styles.smallText}>Already have an account?</h3>
        <button
          className={`${styles.baseButton} ${styles.signInBtn}`}
          onClick={handleSignInClick}
        >
          Sign in
        </button>
      </div>
      <Modal show={showModal} connect={modalType} onClose={handleClose} />
    </div>
  );
}

export default Login;
