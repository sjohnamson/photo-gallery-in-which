import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";



function AddImageForm({ addNewImage }) {
    // state variables that relate to the input fields of the form
    let [newImageDescription, setNewImageDescription] = useState('');
    let [newImagePath, setNewImagePath] = useState('');

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
    }

    return (
        // form to add a new image
        <Box
        component="form"
         onSubmit={handleSubmit} 
         padding={3}
         >
            <TextField
            sx={{marginRight: 1}}
                label="image "
                variant="outlined"
                color="success"
                type="text"
                size="small"
                value={newImagePath}
                onChange={(event) => setNewImagePath(event.target.value)}
            />
            <TextField
            sx={{marginRight: 1}}
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
        </Box>
    )
}

export default AddImageForm