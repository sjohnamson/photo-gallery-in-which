import { useState } from "react"

function GalleryItem({ galleryItem, addLike, deleteImage }) {
    // console.log('galleryItem in GalleryItem', galleryItem)


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
                <button onClick={() => addLike(galleryItem)}>Like</button>
                <span>likes: {galleryItem.likes}</span>
            </div>
            <div>
                <button onClick={() => deleteImage(galleryItem)}>Remove Image</button>
            </div>
        </>
    )
}

export default GalleryItem 