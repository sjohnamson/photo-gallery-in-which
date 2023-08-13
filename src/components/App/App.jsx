import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import GalleryList from './GalleryList/GalleryList';
import AddImageForm from './AddImageForm/AddImageForm';



function App() {
  // renders images when the page loads
  useEffect(() => {
    fetchImages();
  }, [])

  // imageGallery is an array with all the images
  let [imageGallery, setImageGallery] = useState();

  // GET images from the database and set them into imageGallery array
  const fetchImages = () => {
    axios
      .get(`/gallery`)
      .then((response) => {
        setImageGallery(response.data)
        // console.log("ImageGallery: ", response.data)
      })
      .catch((error) => {
        console.log('Error in GET/ gallery', error)
      })
  }

  // add image takes in the newImage object created in the AddImageForm component
  const addNewImage = (newImage, clearInputs) => {
    console.log('new image in app post', newImage)
    axios
      .post('/gallery', newImage)
      .then((response) => {
        clearInputs();
        fetchImages();
      })
      .catch((error) => {
        alert(`Couldn't add new image to the gallery. Try again later`);
        console.log('Error adding image', error);
      });
  }

  // addLike takes in the galleryItem created in GalleryItem component
  const addLike = (galleryItem) => {
    // console.log('likedImage: ', galleryItem)
    axios
      .put(`/gallery/like/${galleryItem.id}`)
      .then((response) => {
        console.log('Like added: ', galleryItem.id);
        fetchImages();
      })
      .catch((error) => {
        console.log('Error in PUT/ gallery', error);
      })
  }

  // deleteImage takes in the galleryItem created in GalleryItem and removes it from the database
  const deleteImage = (galleryItem) => {
    console.log('Image to delete: ', galleryItem)
    axios
      .delete(`/gallery/delete/${galleryItem.id}`)
      .then((response) => {
        console.log('Deleted: ', galleryItem.id);
        fetchImages();
      })
      .catch((error) => {
        console.log('Error in DELETE/ gallery', error);
      })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">In Which _______ and Others Discover the End Book Drawing Gallery</h1>
          </header>
          <AddImageForm addNewImage={addNewImage} />

          <Grid
            container spacing={2}
            alignItems="center"
            justifyContent="center"

          >
            <GalleryList
              imageGallery={imageGallery}
              addLike={addLike}
              deleteImage={deleteImage}
            />
          </Grid>
        </div>
      </Grid>

    </Box>

  );
}

export default App;
