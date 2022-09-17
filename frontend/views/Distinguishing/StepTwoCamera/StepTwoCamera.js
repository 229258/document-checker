import React, { useEffect, useState } from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";
import Webcam from "react-webcam";

import DistinguishingStyles from "../Distinguishing.module.scss";
import Title from "../../../components/Title";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import useMediaQuery from "hooks/useMediaQuery.hook";

const SecondPage = () => {
    const [title, setTitle] = useState("Pokaż przód dokumentu");
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [screenshotView, setScreenshotView] = useState(false);
    const [cameraAvailable, setCameraAvailable] = useState(false);
    const isMobile = useMediaQuery(480);

    const getFrontImage = (data) => {
        if (frontImage) return;

        setFrontImage(data);
    };

    const getBackImage = (data) => {
        if (backImage) return;

        setBackImage(data);
    };

    const takePhoto = () => {
        getScreenshot({ width: 1920, height: 1080 });
    }

    return (
        <>
            <div className={DistinguishingStyles.title}>
                <Title
                    title={title}
                    subTitle={"Dane nie są zapisywane na naszych serwerach"}
                />
            </div>

            <div className={DistinguishingStyles.cameraWindow}>
                {!cameraAvailable && <div className={DistinguishingStyles.noCamera}>
                    <img src="https://i.ibb.co/5BRrrqR/video.png" />
                    <span>Zezwól przeglądarce na dostęp do kamerki internetowej</span>
                </div>}
                <Webcam className={DistinguishingStyles.camera} onUserMedia={() => setCameraAvailable(true)} />
            </div>

            <div className={DistinguishingStyles.submitButton}>
                {screenshotView && (<DefaultButton
                    description={"ponów próbę"}
                    style={"primary"}
                // dataToUpload={[frontImage, backImage]}
                />)}
                <DefaultButton
                    description={screenshotView ? " prześlij zdjęcie" : "zrób zdjęcie"}
                    onClick={takePhoto}
                    style={"primary"}
                // dataToUpload={[frontImage, backImage]}
                />
            </div>
            <div className={DistinguishingStyles.bottomMargin}></div>
        </>
    );
};

const StepTwoCamera = () => {
    return (
        <Fullscreen
            component={<Main args={SecondPage} />}
            page={"DISTINGUISHING"}
        />
    );
};

export default StepTwoCamera;
