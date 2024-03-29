import React, { useEffect, useRef, useState } from "react";
import Main from "../../../components/Main";
import Fullscreen from "../../../components/Layout/Fullscreen";
import { useRouter } from "next/router";
import Webcam from "react-webcam";

import DistinguishingStyles from "../Distinguishing.module.scss";
import Title from "../../../components/Title";
import DefaultButton from "../../../components/Buttons/DefaultButton";

const STATE = ['takeFront', 'confirmFront', 'takeBack', 'confirmBack'];

const SecondPage = () => {
    const router = useRouter();
    const [title, setTitle] = useState("Pokaż przód dokumentu");
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [progress, setProgress] = useState('takeFront');
    const [cameraAvailable, setCameraAvailable] = useState(false);
    const webcam = useRef(null);
    const [loading, setLoading] = useState(false);

    const takePhoto = () => webcam.current.getScreenshot();

    const uploadFiles = async (dataToUpload) => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://dokumenciki.herokuapp.com/predict/",
                {
                    method: "POST",
                    body: dataToUpload,
                }
            );

            const status = await response.json();

            if (localStorage.getItem("data")) {
                localStorage.clear();
            }

            setLoading(false);

            const dataToStore = JSON.stringify(status);

            localStorage.setItem("data", dataToStore);
            router.push("/distinguishing/final");
        } catch (err) {
            setLoading(false);

            if (localStorage.getItem("data")) {
                localStorage.clear();
            }

            localStorage.setItem("data", null);
            router.push("/distinguishing/final");
        }
    };

    const submit = () => {
        switch (progress) {
            case 'takeFront':
                setFrontImage(takePhoto());
                setProgress('confirmFront');
                break;
            case 'confirmFront':
                setProgress('takeBack');
                setTitle('Pokaż tył dokumentu');
                break;
            case 'takeBack':
                setBackImage(takePhoto());
                setProgress('confirmBack');
                break;
            case 'confirmBack':
                uploadFiles([frontImage, backImage]);
                break;
        }

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
                <Webcam style={{ display: (progress == 'confirmFront' || progress == 'confirmBack') ? 'none' : 'block' }} screenshotFormat={'image/jpeg'} audio={false} className={DistinguishingStyles.camera} onUserMedia={() => setCameraAvailable(true)} ref={webcam} />
                {(progress == 'confirmFront' || progress == 'confirmBack') && <img className={DistinguishingStyles.screenshot} src={progress == 'confirmFront' ? frontImage : backImage} />}
            </div>

            <div className={DistinguishingStyles.submitButton}>
                {(progress == 'confirmFront' || progress == 'confirmBack') && (<DefaultButton
                    description={"ponów próbę"}
                    onClick={() => {
                        if (progress == 'confirmFront') {
                            setFrontImage(null);
                            setProgress('takeFront');
                        }
                        if (progress == 'confirmBack') {
                            setBackImage(null);
                            setProgress('takeBack');
                        }
                    }}
                    style={"secondary"}
                />)}
                <DefaultButton
                    loading={loading}
                    setLoading={setLoading}
                    description={(progress == 'confirmFront' || progress == 'confirmBack') ? "prześlij zdjęcie" : "zrób zdjęcie"}
                    onClick={submit}
                    style={cameraAvailable ? "primary" : "primaryDisabled"}
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
