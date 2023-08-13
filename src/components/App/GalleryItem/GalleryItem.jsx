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
            backgroundColor: '#000'
        }}
        >
            <CardActionArea sx={{ height: 245, width: 245 }}>
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
                        <CardContent
                            sx={{ height: 205 }}
                        >
                            <Typography variant="h6" component="div" backgroundColor={'#c6c6e4'} >
                                Image Description:
                            </Typography>
                            <Typography color="text.secondary" backgroundColor={'#c6c6e4'} >
                                {galleryItem.description}
                            </Typography>
                        </CardContent>}
                </div>
            </CardActionArea>
            <CardActions>
                <Typography color={'white'} variant="button" size="small" padding='5px'>
                    {galleryItem.likes} Likes
                </Typography>
                <IconButton onClick={() => addLike(galleryItem)} variant="text" color="secondary" size="small" padding="5px">
                    <ThumbUpIcon />
                </IconButton>

                <IconButton onClick={() => deleteImage(galleryItem)} color="error" size="small" >
                    <DeleteIcon />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default GalleryItem 