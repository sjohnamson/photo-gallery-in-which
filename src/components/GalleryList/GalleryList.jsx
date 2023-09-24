
import GalleryItem from '../GalleryItem/GalleryItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// creates the gallery list item that will be inserted into the grid in app.js
function GalleryList({ imageGallery, addLike, deleteImage }) {
    return (
       <>
            {/* loops over the imageGallery and turns each into a galleryItem */}
            {imageGallery?.map((image) => (
                <Grid 
                Item 
                key={image.id}
                md={4}
                >
                    <GalleryItem
                        key={image.id}
                        galleryItem={image}
                        addLike={addLike}
                        deleteImage={deleteImage}
                    />
                </Grid>
            ))}
       </>
    )
}


export default GalleryList