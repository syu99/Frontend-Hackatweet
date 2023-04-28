import React from "react";
import styles from "../styles/SignUp.module.css";

import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Appel à l'API pour la connexion
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log("Connexion réussie:", data.token);
          // Stocker le token et rediriger l'utilisateur vers la page d'accueil
        } else {
          console.error("Erreur de connexion:", data.error);
        }
      })
      .catch((error) => console.error("Erreur lors de la connexion:", error));
  };

  return (
    <div>
      <div className={styles.content}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
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
          Sign in
        </button>
      </div>
    </div>
  );
}
//ok
export default SignIn;
