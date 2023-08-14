import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';



function AddImageForm({ addNewImage }) {
    // state variables that relate to the input fields of the form
    let [newImageDescription, setNewImageDescription] = useState('');
    let [newImagePath, setNewImagePath] = useState('');
    let [newImageTitle, setNewImageTitle] = useState('');;

    // on submit click package state variables and call function for POST on app.jsx
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(newImageDescription, newImagePath);
        // make an object with the new image state variables
        const newImage = {
            description: newImageDescription,
            path: newImagePath
        };
        console.log('new image in submit', newImage)
        addNewImage(newImage, clearInputs);
    }

    // reset the state to clear the input fields
    const clearInputs = () => {
        setNewImageDescription('');
        setNewImagePath('');
        setNewImageTitle('');
    }

    return (
        // form to add a new image
        <Box
            component="form"
            onSubmit={handleSubmit}
            paddingBottom={2}
            margin={2}
        >
            <Grid 
            container 
            alignItems="center"
            justifyContent="center"
            xs={12}
            border={2}
            padding={2}>
                 <TextField
                    sx={{ marginRight: 1 }}
                    label="image name"
                    variant="outlined"
                    color="success"
                    type="text"
                    size="small"
                    multiline
                    value={newImageTitle}
                    onChange={(event) => setNewImageTitle(event.target.value)}
                />
                <TextField
                    sx={{ marginRight: 1 }}
                    label="image path"
                    variant="outlined"
                    color="success"
                    type="text"
                    size="small"
                    value={newImagePath}
                    onChange={(event) => setNewImagePath(event.target.value)}
                />
                <TextField
                    sx={{ marginRight: 1 }}
                    label="image description"
                    variant="outlined"
                    color="success"
                    type="text"
                    size="small"
                    multiline
                    value={newImageDescription}
                    onChange={(event) => setNewImageDescription(event.target.value)}
                />
                <Button type='submit' variant="contained" color="success">Add Image</Button>
            </Grid>
        </Box>
    )
}

export default AddImageForm