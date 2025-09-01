import type { Image } from "../hooks/useImages";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import styled from "styled-components";


const Card = styled.div`
    // height: 20rem;
    // width: 20rem;
    // border: 2px solid black;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;

`
const StyledImage = styled.img`
    // height: 10rem;
    // object-fit: scale-down;
`
const StyledDeleteIcon = styled(DeleteIcon)`
color: white;
`
interface cardProps {
    image: Image;
    handleDeleteImage: (id: string) => void
}
const ImageCard: React.FC<cardProps> = ({image, handleDeleteImage}) =>{
    return(
        <Card>
            <StyledImage src={image.imageUrl} alt={image.name} />
            <p>{image.name}</p>
            <IconButton aria-label="delete" onClick={()=> handleDeleteImage(image.id)}><StyledDeleteIcon/></IconButton>
        </Card>
    )
}

export default ImageCard