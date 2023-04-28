import React from "react";
import styles from "../styles/SignUp.module.css";

import { useState } from "react";

 // État local pour stocker les valeurs des champs de formulaire
function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Appel à l'API pour l'inscription
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log("Inscription réussie:", data.token);
          // Stocker le token et rediriger l'utilisateur vers la page d'accueil
        } else {
          console.error("Erreur d'inscription:", data.error);
        }
      })
  };

  return (
    <div>
      <div className={styles.content}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
          placeholder="Firstname"
        />
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          placeholder="Username"
        />
        <input
          className={styles.input}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button className={styles.button} onClick={handleSubmit}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
