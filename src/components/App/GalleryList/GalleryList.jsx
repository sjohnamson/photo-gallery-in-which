
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ imageGallery, addLike, deleteImage }) {

    return (
        <>
            {/* loops over the imageGallery and turns each into a galleryItem */}
            {imageGallery?.map((image) => (
                    <GalleryItem
                        key={image.id}
                        galleryItem={image}
                        addLike={addLike}
                        deleteImage={deleteImage}
                    />
            ))}
        </>
    )
}


export default GalleryList