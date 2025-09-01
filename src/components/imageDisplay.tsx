import type { Image } from "../hooks/useImages";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const StyledImageList = styled(ImageList)`
  width: 80%;
`;
const StyledImageListItem = styled(ImageListItem)`
  height: 400px;
  background-color: white;
  margin: 1rem;
  color: black;
  padding: 1rem;
  border-radius: 5px;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;
const StyledImageListItemBar = styled(ImageListItemBar)`
  .MuiImageListItemBar-titleWrap {
    color: black;
    text-align: center;
  }
  .MuiImageListItemBar-title {
    font-size: x-large;
    line-height: 3rem;
    font-weight: 600;
  }
`;
const StyledDeleteIcon = styled(DeleteIcon)`
  color: black;
`;
interface DisplayProps {
  displayImages: Image[];
  handleDeleteImage: (id: string) => void;
}

const ImageDisplay: React.FC<DisplayProps> = ({
  displayImages,
  handleDeleteImage,
}) => {
  return (
    <StyledImageList cols={2}>
      {displayImages &&
        displayImages.map((img) => (
          <StyledImageListItem key={img.id}>
            <StyledImage src={img.imageUrl} alt={img.name} />
            <StyledImageListItemBar
              title={img.name}
              subtitle={
                <IconButton onClick={() => handleDeleteImage(img.id)}>
                  <StyledDeleteIcon />
                </IconButton>
              }
              position="below"
            />
          </StyledImageListItem>
        ))}
    </StyledImageList>
  );
};

export default ImageDisplay;
