import React from "react";

import styles from "./styles.module.scss";

const Main = (props) => {
  const { args, page } = props;
  return (
    <>
      {args()}
    </>
  );
};

export default Main;
