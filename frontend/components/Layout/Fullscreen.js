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
      </Head>
      <Navbar page={page} />
      {/* <div className={styles.break}></div> TODO: remove this & grid beloew after properly griding landing page*/}
      <div style={{ display: "grid", gridColumn: "span 12" }}>
        <div className={styles.globeColors}>
          <div className={styles.globe}>{secondComponent}</div>
        </div>
        {component}
      </div>
    </div>
  );
};

export default Fullscreen;
