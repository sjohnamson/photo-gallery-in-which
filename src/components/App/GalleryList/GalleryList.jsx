
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ imageGallery, fetchImages }) {
    
    return (
        <div>
            {/* loops over the imageGallery and turns each into a galleryItem */}
            {imageGallery?.map((image) => (
                <GalleryItem 
                id={image.id}
                galleryItem={image} 
                fetchImages={fetchImages}/>
            ))}
        </div>
    )
}


export default GalleryList