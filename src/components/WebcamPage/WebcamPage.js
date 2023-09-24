import React from "react";
import Webcam from "react-webcam";
import { useRef, useCallback, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import Grid from '@mui/material/Unstable_Grid2';
import WebcamPreview from "../WebcamPreview/WebcamPreview";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
};

export default function WebcamPage({ imageGallery, addLike, fetchImages }) {
  const webcamRef = useRef(null);
  // photo from webcam capture
  const [photo, setPhoto] = useState(null);
  // sets public id from cloudinary
  const [id, setId] = useState("");
  // sets loading screen to disable double upload
  const [loading, setLoading] = useState(false);
  const [prevURL, setPrevURL] = useState("");

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    try {
      setLoading(true);
      const imageData = new FormData();
      imageData.append("file", imageSrc);

      imageData.append("upload_preset", "WebcamGallery");
      const res = await axios.post(
        ` https://api.cloudinary.com/v1_1/dkabdionr/image/upload`,
        imageData
      );

      const imageDetails = res.data;
      setId(imageDetails.public_id);
      setPrevURL(imageDetails.url);
      console.log('url in first:', prevURL)

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }


  });

  const deleteImage = () => {
    setPrevURL("");
    setId("");
  };

  return (
    <>
      <Grid item>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpg"
          height={200}
          width={220}
        />
        <Button onClick={capture}>Capture photo</Button>
        {/* {photo && (
          <img
            src={photo}
          />
        )} */}
      </Grid >
      <Grid>
        <WebcamPreview
          fetchImages={fetchImages}
          url={prevURL}
        />
      </Grid>
      <Grid item
        container
        alignItems="center"
        justifyContent="center"
      >
        {/* images that get mapped through and added */}
        <GalleryList
          imageGallery={imageGallery}
          addLike={addLike}
          deleteImage={deleteImage}
        />
      </Grid>
    </>
  )
}
