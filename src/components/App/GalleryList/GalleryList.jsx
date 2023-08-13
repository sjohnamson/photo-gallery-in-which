
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

function GalleryList({ imageGallery, addLike, deleteImage }) {

    return (
        <>
            {/* loops over the imageGallery and turns each into a galleryItem */}
            {imageGallery?.map((image) => (
                <Grid itemxs={4} key={image.id}>
                    <Item><GalleryItem
                        key={image.id}
                        galleryItem={image}
                        addLike={addLike}
                        deleteImage={deleteImage}
                    />
                    </Item>
                </Grid>
            ))}
        </>
    )
}


export default GalleryList