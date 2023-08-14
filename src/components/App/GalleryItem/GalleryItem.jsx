import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
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
        <Card sx={{
            backgroundColor: '#000',
        }}
       
        >
            {/* delineates where you can click to toggle */}
            <CardActionArea sx={{ height: 350, width: 245 }}>
                <div onClick={() => {
                    setItemDisplay(!itemDisplay)
                }}>
                    {itemDisplay ?
                        <CardMedia
                            sx={{ height: 350 }}
                            image={galleryItem.path}
                            title={galleryItem.title}
                        />
                        :
                        <CardContent>
                            <Typography variant="h6" component="div" backgroundColor={'rgb(164, 227, 248)'} >
                                Image Description:
                            </Typography>
                            <Typography color="text.secondary" backgroundColor={'rgb(164, 227, 248)'} >
                                {galleryItem.description}
                            </Typography>
                        </CardContent>}
                </div>
            </CardActionArea>
            {/* area at the bottom of each card for button actions and like counter */}
            <CardActions>
                {/* like counter */}
                <Typography color={'white'} variant="button" size="small" padding='5px'>
                    {galleryItem.likes} Likes
                </Typography>
                {/* add like button */}
                <IconButton onClick={() => addLike(galleryItem)} variant="text" color="secondary" size="small" padding="5px">
                    <ThumbUpIcon />
                </IconButton>
                {/* delete image button */}
                <IconButton onClick={() => deleteImage(galleryItem)} color="error" size="small" >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default GalleryItem 