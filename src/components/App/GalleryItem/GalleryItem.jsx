import { useState } from "react"
import axios from "axios"

function GalleryItem({ galleryItem, fetchImages }) {
    console.log('galleryItem in GalleryItem', galleryItem)
    const addLike = () => {
        axios.put(`/gallery/${galleryItem.id}`)
        .then((response) => {
            console.log('Llike added: ', galleryItem.id);
            fetchImages();
        })
        .catch((error) => {
            console.log('Error in DELETE/ students', error)
        })
    }

    // toggles between the image and the description
    const [itemDisplay, setItemDisplay] = useState(true)

    return (
        <>
            <div onClick={() => {
                setItemDisplay(!itemDisplay)
            }}>
                {itemDisplay ?
                    <img src={galleryItem.path} />
                    :
                    <div>{galleryItem.description}</div>}
            </div>
            <div>
                <button onClick={addLike}>Like</button>
                <span>likes:</span>
            </div>
        </>
    )
}

export default GalleryItem 