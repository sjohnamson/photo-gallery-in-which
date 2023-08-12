import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';

import GalleryList from './GalleryList/GalleryList';


function App() {
  // renders images when the page loads
  useEffect(() => {
    fetchImages();
  }, [])
  // imageGallery is an array with all the images
  let [imageGallery, setImageGallery] = useState();

  // GET images from the database and set them into imageGallery array
  const fetchImages = () => {
    axios.get(`/gallery`)
      .then((response) => {
        setImageGallery(response.data)
        console.log("ImageGallery: ", response.data)
      })
      .catch((error) => {
        console.log('Error in GET/ gallery', error)
      })
  }

  const addLike = (galleryItem) => {
    console.log('likedImage: ', galleryItem)

    axios.put(`/gallery/like/${galleryItem.id}`, {likes: galleryItem})
      .then((response) => {
        console.log('Like added: ', galleryItem.id);
        fetchImages();
      })
      .catch((error) => {
        console.log('Error in PUT/ gallery', error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        imageGallery={imageGallery} 
        addLike={addLike} />
    </div>
  );
}

export default App;
