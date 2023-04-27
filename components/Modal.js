import React from "react";
import styles from "../styles/Modal.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Modal(props) {
   // Si la propriété "show" est fausse, ne pas afficher le composant Modal
  if (!props.show) {
    return null;
  }
  // Choisir le composant à afficher (SignIn ou SignUp) en fonction de la propriété "connect"
  let componentLogin;
  if (props.connect === "SignIn") {
    componentLogin = <SignIn />;
  } else {
    componentLogin = <SignUp />;
  }
  // Fonction pour gérer le clic sur la croix de fermeture
  const handleCloseClick = (event) => {
  // Empêcher la propagation de l'événement pour éviter de déclencher l'événement onClick du parent
    event.stopPropagation(); 
    props.onClose();// Appeler la fonction onClose passée en tant que prop
  };

  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <img className={styles.images} src="twitter-logo-1.png" alt="Twitter Logo" />
          <h4 className={styles.titreModal}>Create your Hackatweet account</h4>
          <span className={styles.close} onClick={handleCloseClick}>
            ×
          </span>
        </div>
        <div className={styles.modalBody}>{componentLogin}</div>
      </div>
    </div>
  );
}

export default Modal;
