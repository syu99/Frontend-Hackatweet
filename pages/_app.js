import "../styles/globals.css";
import Head from "next/head";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Home from "../components/Home";

function App({ Component, pageProps }) {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
