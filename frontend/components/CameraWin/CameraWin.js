import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Webcam from "react-webcam";

// function CameraWin() {
//     let videoRef = useRef(null);

//     let photoRef = useRef(null)

//     const getVideo = () => {
//       navigator.mediaDevices
//         .getUserMedia({
//           video: true
//         })
//         .then((stream) => {
//           let video = videoRef.current;
//           video.srcObject = stream;
//           video.play();
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     };

//     const takePicture = () => {
//       const width = 1000
//       const height = 1000

//       let video = videoRef.current

//       let photo = photoRef.current

//       photo.width = width

//       photo.height = height

//       let ctx = photo.getContext('2d')

//       ctx.drawImage(video, 0, 0, 500, 400)

//     }

//     const clearImage = () => {
//         let photo = photoRef.current

//         let ctx = photo.getContext('2d')

//         ctx.clearRect(0,0,photo.width,photo.height)
//       }

//     useEffect(() => {
//         getVideo();
//       }, [videoRef]);

//       return (
//         <div className={styles.CameraWindow}>
//           <video className={styles.cameraSize} ref={videoRef}></video>

//             <br/>
//         <button onClick={takePicture} className={styles.button}>Zrób zdęcie</button>
//         <br/><br/><br/><br/>
//         <button onClick={clearImage} className={styles.button}>Usuń zdjęcie</button>
//         <canvas className={styles.CameraWin} ref={photoRef}></canvas>

//         </div>
//       );
// };
const videoConstraints = {
  width: 1025,
  height: 671,
  facingMode: "user",
};

const CameraWin = () => {

  const webcamRef = React.useRef(null);
  const [image, setImage] = useState('');
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  return (
    <div className={styles.CameraWindow}>
      <div className={styles.webcamImg}>
        {image == '' ? 
          <Webcam
            audio={false}
            height={671}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1025}
            videoConstraints={videoConstraints}
          />
         : 
          <img src={image} />
        }
      </div>
      <div>
      <button onClick={capture} className={styles.button}>
        Capture photo
      </button>
      </div>
      {/* {image && <img src={image} />} */}
    </div>
  );
};
export default CameraWin;
