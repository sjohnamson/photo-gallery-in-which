import { useState } from "react"

function GalleryItem({ galleryItem, addLike }) {
    console.log('galleryItem in GalleryItem', galleryItem)


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
        </>
    )
}

export default GalleryItem 