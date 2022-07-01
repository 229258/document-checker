import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";
import Head from 'next/head'

import styles from "./styles.module.scss";
import * as globalStyles from "../../styles/globals.module.scss";

const Fullscreen = (props) => {
  const { component, page } = props;
  return (
    <div className={`${styles.fullscreen} ${globalStyles.mainContainer}`}>
      <Head>
        <title>Identyfikacja dowodów osobistych</title>
      </Head>
      <Navbar page={page} />
      {component}
    </div >
  );
};

export default Fullscreen;
