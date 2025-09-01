import type { Image } from "../hooks/useImages";
import styled from "styled-components";

const Card = styled.div`
    height: 100%;
    width: 100%;
    border: 2px solid black;
`
const StyledImage = styled.img`
    height: 100%;
    width: 100%;
`

interface cardProps {
    image: Image;
    handleDeleteImage: (id: string) => void
}
const ImageCard: React.FC<cardProps> = ({image, handleDeleteImage}) =>{
    return(
        <Card>
            <StyledImage src={image.imageUrl} alt={image.name} />
            <button onClick={()=> handleDeleteImage(image.id)}>Delete</button>
        </Card>
    )
}

export default ImageCard