import { useState } from "react";
import styles from "../styles/Home.module.css";

function Home() {
  const [tweet, setTweet] = useState("");
  let nbrChar = tweet.length;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.user}>
          <h3>User</h3>
        </div>
        <div className={styles.home}>
          <div className={styles.headerHome}>
            <h3>Home</h3>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setTweet(e.target.value)}
              value={tweet}
              placeholder="What's up?"
            />
            <div className={styles.botHeaderHome}>
              <p>{nbrChar}/280</p>
              <button className={styles.buttonTweet}>Tweet</button>
            </div>
          </div>
        </div>
        <div className={styles.hashtag}>
          <h3>Trend</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
