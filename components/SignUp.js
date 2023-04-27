import React from "react";
import styles from "../styles/SignUp.module.css";

import { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className={styles.content}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          placeholder="Firstname"
        />
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Username"
        />
        <input
          className={styles.input}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button className={styles.button}>Sign up</button>
      </div>
    </div>
  );
}

export default SignUp;
