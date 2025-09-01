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
    displayImages: Image[]
}

const ImageDisplay: React.FC<DisplayProps> = ({displayImages}) =>{
    return(
        <ImageContainer>
            {displayImages && displayImages.map((img) => (
                <ImageCard key={img.id} image={img} />
            ))}
        </ImageContainer>
    )
}

export default ImageDisplay