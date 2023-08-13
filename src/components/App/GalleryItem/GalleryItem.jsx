import { useState } from "react"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import Typography from '@mui/material/Typography';


function GalleryItem({ galleryItem, addLike, deleteImage }) {
    // console.log('galleryItem in GalleryItem', galleryItem)


    // toggles between the image and the description
    const [itemDisplay, setItemDisplay] = useState(true)

    return (
        <Card sx={{ maxWidth: 245 }} >
            <CardActionArea>
                <div onClick={() => {
                setItemDisplay(!itemDisplay)
            }}>
                {itemDisplay ?
                    <CardMedia
                        sx={{ height: 245 }}
                        image={galleryItem.path}
                        title="Goat"
                    />
                    :
                    <CardContent sx={{ height: 205 }} >
                        <Typography variant="h6" component="div" backgroundColor="yellow">
                            Image Description:
                        </Typography>
                        <Typography color="text.secondary" backgroundColor="yellow">
                            {galleryItem.description}
                            </Typography>
                    </CardContent>}
            </div>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => addLike(galleryItem)} variant="text" color="secondary" size="small" padding="5px">Like</Button>
                <Typography variant="button">{galleryItem.likes} Likes</Typography>          
                <Button onClick={() => deleteImage(galleryItem)} color="error" startIcon={<DeleteIcon />} size="small" >Remove</Button>
            </CardActions>

        </Card>
    )
}

export default GalleryItem 