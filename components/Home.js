import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Home() {
  const [tweet, setTweet] = useState("");
  const [dataTweet, setDataTweet] = useState([]);
  const [majTweet, setMajTweet] = useState(false);

  useEffect(() => {
    console.log("new tweet");
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setDataTweet([...data.tweets]);
        //console.log(data);
      });
  }, [majTweet]);

  console.log(dataTweet);

  let nbrChar = tweet.length;

  let firstName = "firstName";
  let userName = "userName";
  //action de donnection
  const handleLogout = () => {
    dispatch(logout());
  };

  //action créer un tweet

  //affichage des tweets dans le front
  const listTweets = dataTweet.map((data, i) => {
    return (
      <div className={styles.tweet}>
        <div className={styles.titreUser}>
          <img
            src="profile-egg.png"
            alt="Egg logo"
            className={styles.egglogo}
          />
          <p>
            {data.firstname} @{data.username}
          </p>
        </div>
        <div className={styles.contenuTweet}>{data.tweet}</div>
      </div>
    );
  });

  function createTweet() {
    fetch("http://localhost:3000/tweets", {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        username: "username",
        firstname: "firstname",
        tweet: tweet,
        hashtag: "",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMajTweet(!majTweet);
      });
  }
  return (
    <div className={styles.main}>
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
                <p>{firstName}</p>
                <p>{userName}</p>
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
              <button
                className={styles.buttonTweet}
                onClick={() => createTweet()}
              >
                Tweet
              </button>
            </div>
          </div>
          <div className={styles.bodyHome}>{listTweets}</div>
        </div>
        <div className={styles.hashtag}>
          <h3>Trend</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
