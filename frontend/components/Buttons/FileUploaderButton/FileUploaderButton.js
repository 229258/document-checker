import useMediaQuery from "hooks/useMediaQuery.hook";
import React, { useState } from "react";
import FileUploaderComponent from "../../FileUploader/FileUploader";

import styles from "./styles.module.scss";

const ButtonElement = (props) => {
  const { position, image, description, getFrontImage, getBackImage } = props;

  const [frontImage, setFrontImage] = useState();
  const [backImage, setBackImage] = useState();
  const isTablet = useMediaQuery(768);

  const getImage = getFrontImage || getBackImage;

  return (
    <>
      <div className={styles.box}>
        <div className={styles.fileUploader}>
          <FileUploaderComponent
            getImage={getImage}
            setFrontImage={setFrontImage}
            setBackImage={setBackImage}
            position={position}
          />
        </div>
        {frontImage || backImage ? (
          position === "left" ? (
            <div className={styles.uploadedImageGrid}>
              <img src={frontImage} className={styles.uploadedImage} />
            </div>
          ) : (
            <div className={styles.uploadedImageGrid}>
              <img src={backImage} className={styles.uploadedImage} />
            </div>
          )
        ) : (
          <>
            <div
              className={styles[image]}
            />
            <div
              className={styles.description}
            >
              {description}
            </div>

            {!isTablet && <div
              className={styles.secondDescription}
            >
              (lub przeciągnij)
            </div>}
          </>
        )}
      </div>
    </>
  );
};

const FileUploaderButton = (props) => {
  const { leftButton, rightButton, getFrontImage, getBackImage } = props;

  return (
    <div className={styles.container}>
      <ButtonElement
        position={leftButton.position}
        image={leftButton.image}
        description={leftButton.description}
        getFrontImage={getFrontImage}
      />

      <ButtonElement
        position={rightButton.position}
        image={rightButton.image}
        description={rightButton.description}
        getBackImage={getBackImage}
      />
    </div>
  );
};

export default FileUploaderButton;
