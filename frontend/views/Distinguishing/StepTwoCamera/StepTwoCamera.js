import React from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";
import DistinguishingStyles from "../Distinguishing.module.scss";
import Title from "../../../components/Title";
import CameraWin from "../../../components/CameraWin"
import SendPhotoButton from "../../../components/Buttons/SendPhotoButton";

const ThirdPage = () => {
  return (
    <div className={DistinguishingStyles.container}>
      <div className={DistinguishingStyles.titleGrid}>
        <Title
          title={"Pokaż przód dokumentu"}
          subTitle={"Dane nie są zapisywane na naszych serwerach"}
        />
      </div>
 
      <div className={DistinguishingStyles.textCamWinGrid}>
          <Title
               subTitle={"Zezwól przeglądarce na dostęp do kamerki internetowej."}
          />
      </div>
      <div className={DistinguishingStyles.cameraWindow}>
        <CameraWin/>
        
      </div>
     

    </div>
  );
};

const StepThird = () => {
  return (
    <Fullscreen
      component={<Main args={ThirdPage} />}
      page={"DISTINGUISHING"}
    />
  );
};

export default StepThird;
