import { useRouter } from "next/router";
import React from "react";

import styles from "./styles.module.scss";

const ButtonElement = (props) => {
  const { position, image, description, nextPage } = props;

  const router = useRouter();

  const onClick = () => router.push(`/distinguishing${nextPage}`);

  return (
    <>
      <div className={styles[`${position}Grid`]}>
        <div className={styles.box} onClick={onClick}>
          <div
            className={`${styles[image]} ${styles.imageGrid} ${styles.flex}`}
          />
          <div
            className={`${styles.flex} ${styles.descriptionGrid} ${styles.description}`}
          >
            {description}
          </div>

          <div
            className={`${styles.flex} ${styles.secondDescriptionGrid} ${styles.secondDescription}`}
          >
            (lub przeciągnij)
          </div>
        </div>
      </div>
    </>
  );
};

const FileUploaderButton = (props) => {
  const { leftButton, rightButton } = props;

  return (
    <div className={styles.container}>
      <ButtonElement
        position={leftButton.position}
        image={leftButton.image}
        description={leftButton.description}
        nextPage={"/photos"}
      />

      <ButtonElement
        position={rightButton.position}
        image={rightButton.image}
        description={rightButton.description}
        nextPage={"/camera"}
      />
    </div>
  );
};

export default FileUploaderButton;
