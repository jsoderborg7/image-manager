import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ImageUpload } from "../hooks/useImages";

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
        }
        setErrorMessage("")
        const reader = new FileReader()
        file && reader.readAsDataURL(file)
        reader.onloadend = () =>{
            if (file){
                handleUpload({name: imageName, imageUrl: URL.createObjectURL(file)})
                setImageName("")
                setFile(null)
                handleCloseModal()
            } else {
                console.error('Error reading file', reader.error)
            }
        }
        reader.onerror = () =>{
            console.error("Error reading file", reader.error)
        }
    }

    return(
       <>
       <form onSubmit={handleSubmitForm}>
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
       </form>
       </> 
    )
}
export default ImageUploadForm