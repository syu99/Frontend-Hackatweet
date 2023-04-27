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

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <img className={styles.images} src="twitter-logo-1.png" />
          <h4 className={styles.titreModal}>Create your Hackatweet account</h4>
        </div>
        <div className={styles.modalBody}>{componentLogin}</div>
      </div>
    </div>
  );
}

export default Modal;
