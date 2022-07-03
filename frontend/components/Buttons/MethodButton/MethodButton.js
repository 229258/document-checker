import { useRouter } from "next/router";
import React from "react";

import styles from "./styles.module.scss";

const ButtonElement = (props) => {
  const { image, description, nextPage } = props;

  const router = useRouter();

  const onClick = () => router.push(nextPage);

  return (
    <>
      <div className={styles.box} onClick={onClick}>
        <div
          className={styles[image]}
        />

        <div
          className={styles.description}
        >
          {description}
        </div>
      </div>
    </>
  );
};

const MethodButton = (props) => {
  const { leftButton, rightButton } = props;

  return (
    <div className={styles.container}>
      <ButtonElement
        image={leftButton.image}
        description={leftButton.description}
        nextPage={"/distinguishing/photos"}
      />

      <ButtonElement
        image={rightButton.image}
        description={rightButton.description}
        nextPage={"/distinguishing/photos"}
      />
    </div>
  );
};

export default MethodButton;
