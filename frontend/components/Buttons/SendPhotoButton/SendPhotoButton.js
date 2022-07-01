import React from "react";
import styles from "./styles.module.scss";
import CameraWin, {capture} from "../../CameraWin";
import Webcam from "react-webcam"


const SendPhotoButton = (props) => {
    const { description, style} = props;

    return (
        <div 
        className={`${styles[style]}`}
        >
            {description}
        </div>
    )
};

export default SendPhotoButton;