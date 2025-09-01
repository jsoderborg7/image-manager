import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ImageUpload } from "../hooks/useImages";
import { Alert } from "@mui/material";
import styled from "styled-components";

const StyledForm = styled.form`
    width: 50%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

interface UploadProps {
    handleUpload: (image: ImageUpload) => void
    handleCloseModal: () => void
}

const ImageUploadForm: React.FC<UploadProps> = ({handleUpload, handleCloseModal}) =>{
    const [imageName, setImageName] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        const selectedFile = e.target.files ? e.target.files[0] : null
        setFile(selectedFile)
    }
    const handleSubmitForm = (e: FormEvent) =>{
        e.preventDefault()
        if (!imageName || !file){
            setErrorMessage("Image selection and name are required, please select an image and give it a name!")
            console.log(errorMessage)
        } else {
            file && imageName && handleUpload({name: imageName, imageUrl: URL.createObjectURL(file)})
            setImageName("")
            setFile(null)
            setErrorMessage("")
            handleCloseModal()
        }

    }

    return(
       <>
       <StyledForm onSubmit={handleSubmitForm}>
        <label>Name Your Image</label>
        <input
            type="text"
            placeholder="Image Name"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
        />
        <input
            type="file"
            accept="image/*"
            onChange={handleChange}
        />
        <button type="submit">Upload</button>
       </StyledForm>
       {errorMessage && <Alert severity="warning">Both file and name are required</Alert>}
       </> 
    )
}
export default ImageUploadForm