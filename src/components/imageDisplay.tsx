import ImageCard from "./imageCard";
import type { Image } from "../hooks/useImages";
import styled from "styled-components";

const ImageContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
`

interface DisplayProps {
    displayImages: Image[],
    handleDeleteImage: (id: string) => void
}

const ImageDisplay: React.FC<DisplayProps> = ({displayImages, handleDeleteImage}) =>{
    return(
        <ImageContainer>
            {displayImages && displayImages.map((img) => (
                <ImageCard key={img.id} image={img} handleDeleteImage={handleDeleteImage} />
            ))}
        </ImageContainer>
    )
}

export default ImageDisplay