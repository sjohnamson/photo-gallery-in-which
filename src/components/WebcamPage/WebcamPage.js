import React from "react";
import Webcam from "react-webcam";
import { useRef, useCallback, useState } from "react";
import { Button } from "@mui/material";
const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
  };

export default function WebcamPage() {
    const webcamRef = useRef(null);
    const [photo, setPhoto] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPhoto(imageSrc);
    }, [webcamRef, setPhoto]);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpg"
                height={200}
                width={220}
            />
            <Button onClick={capture}>Capture photo</Button>
            {photo && (
                <img
                    src={photo}
                />
            )}
        </>
    )
}
