import React from "react";
import styles from "../styles/Modal.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <img className={styles.images} src="twitter-logo-1.png" />
          <h4 className={styles.titreModal}>Create your Hackatweet account</h4>
        </div>
        <div className={styles.modalBody}>
          {/* composant signUP ou signIn en fonction du button de la page Login */}
          <SignIn></SignIn>
        </div>
      </div>
    </div>
  );
}

export default Modal;
