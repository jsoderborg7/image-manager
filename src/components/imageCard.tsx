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
}
const ImageCard: React.FC<cardProps> = ({image}) =>{
    return(
        <Card>
            <StyledImage src={image.imageUrl} alt={image.name} />
        </Card>
    )
}

export default ImageCard