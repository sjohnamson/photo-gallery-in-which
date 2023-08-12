
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ imageGallery, addLike }) {

    return (
        <div>
            {/* loops over the imageGallery and turns each into a galleryItem */}
            {imageGallery?.map((image) => (
                <GalleryItem
                    key={image.id}
                    galleryItem={image}
                    addLike={addLike}
                />
            ))}
        </div>
    )
}


export default GalleryList