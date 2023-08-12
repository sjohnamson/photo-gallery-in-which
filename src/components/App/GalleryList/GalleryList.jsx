
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ imageGallery }) {
    
    return (
        <div>
            {/* loops over the imageGallery and turns each into a galleryItem */}
            {imageGallery?.map((image) => (
                <GalleryItem galleryItem={image} />
            ))}
        </div>
    )
}


export default GalleryList