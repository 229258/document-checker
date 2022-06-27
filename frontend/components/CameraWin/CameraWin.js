import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

function CameraWin() {
    let videoRef = useRef(null);
   
    let photoRef = useRef(null)
   
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(err);
        });
    };
    
    const takePicture = () => {
      const width = 1000
      const height = 1000
      
      let video = videoRef.current
   
      let photo = photoRef.current
   
      photo.width = width
   
      photo.height = height
   
      let ctx = photo.getContext('2d')
   
      ctx.drawImage(video, 0, 0, 500, 400)
      
    }

    const clearImage = () => {
        let photo = photoRef.current
     
        let ctx = photo.getContext('2d')
     
        ctx.clearRect(0,0,photo.width,photo.height)
      }

    useEffect(() => {
        getVideo();
      }, [videoRef]);
    
      return (
        <div className={styles.CameraWindow}>
          <video className={styles.cameraSize} ref={videoRef}></video>
         
            <br/>
        <button onClick={takePicture} className={styles.button}>Zrób zdęcie</button>
        <br/><br/><br/><br/>
        <button onClick={clearImage} className={styles.button}>Usuń zdjęcie</button>
        <canvas className={styles.CameraWin} ref={photoRef}></canvas>  
       
        </div>
      );
};
export default CameraWin;
