import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const handleLogout = () => {
  dispatch(logout());
};

function Home() {
  const [tweet, setTweet] = useState("");
  let nbrChar = tweet.length;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.user}>
          <Link href="/home">
            <img
              src="twitter-logo-reverse.png"
              alt="Reverse logo"
              className={styles.logo}
            />
          </Link>
          <div className={styles.egguser}>
            <div className={styles.avataruser}>
              <img
                src="profile-egg.png"
                alt="Egg logo"
                className={styles.egglogo}
              />
              <div className={styles.userinfo}>
                <p>firstname</p>
                <p>username</p>
              </div>
            </div>
            <button
              className={styles.buttonLogout}
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </div>

        <div className={styles.home}>
          <div className={styles.headerHome}>
            <h3>Home</h3>
            <input
              maxLength={280}
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
