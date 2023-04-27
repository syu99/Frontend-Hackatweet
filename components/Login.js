import styles from '../styles/Login.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftBackground}>
        {/* <img src="/twitter-logo-reverse.png" alt="Twitter Logo" /> */}
      </div>
      <div className={styles.rightBackground}>
        {/* <img className={styles.logo} src="/twitter-logo-reverse.png" alt="Twitter Logo" /> */}
        <h1 className={styles.title}>
          See What’s <br />
          happening
        </h1>
        <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
        <button className={`${styles.baseButton} ${styles.signupBtn}`}>Sign up</button>
        <h3 className={styles.smallText}>Already have an account?</h3>
        <button className={`${styles.baseButton} ${styles.signInBtn}`}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
