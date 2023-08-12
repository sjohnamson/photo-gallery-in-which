
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ imageGallery }) {
    
    return (
        <div>
            {/* loops over the imageGallery and turns each into a galleryItem */}
            {imageGallery?.map((image) => (
                <GalleryItem 
                key={image.id}
                galleryItem={image} />
            ))}
        </div>
    )
}


export default GalleryList