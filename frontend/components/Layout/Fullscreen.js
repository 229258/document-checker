import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";
import Head from 'next/head'

import styles from "./styles.module.scss";
import * as globalStyles from "../../styles/globals.module.scss";

const Fullscreen = (props) => {
  const { component, secondComponent, page } = props;
  return (
    <div className={`${styles.fullscreen} ${globalStyles.mainContainer}`}>
      <Head>
        <title>Identyfikacja dowodów osobistych</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" /> */}
      </Head>
      <Navbar page={page} />
      <div className={styles.break}></div>
      <div style={{ backgroundColor: "#476FFA", gridColumn: "span 12", height: "1000px" }}>etwas here ist</div>
      {/* <div className={styles.globeColors}>
        <div className={styles.globe}>{secondComponent}</div>
      </div>
      {component} */}
    </div>
  );
};

export default Fullscreen;
