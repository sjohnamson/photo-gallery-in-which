import { useState } from "react"

function GalleryItem({ galleryItem }) {
    console.log('galleryItem in GalleryItem', galleryItem)
    const addLike = () => {
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