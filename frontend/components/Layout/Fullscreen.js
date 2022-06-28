import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";
import Head from 'next/head'

import styles from "./styles.module.scss";

const Fullscreen = (props) => {
  const { component, secondComponent, page } = props;
  return (
    <div className={styles.fullscreen}>
      <Head>
        <title>Identyfikacja dowodów osobistych</title>
      </Head>
      <Navbar page={page} />
      <div className={styles.globeColors}>
        <div className={styles.globe}>{secondComponent}</div>
      </div>
      {component}
    </div>
  );
};

export default Fullscreen;
