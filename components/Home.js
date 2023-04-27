import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.user}>
          <h3>User</h3>
        </div>
        <div className={styles.home}>
          <h3>Home</h3>
        </div>
        <div className={styles.hashtag}>
          <h3>Trend</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
