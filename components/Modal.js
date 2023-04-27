import React from "react";
import styles from "../styles/Modal.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  let componentLogin;
  if (props.connect === "SignIn") {
    componentLogin = <SignIn />;
  } else {
    componentLogin = <SignUp />;
  }

  const handleCloseClick = (event) => {
    event.stopPropagation();
    props.onClose();
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
