import { useState } from "react";
import ImageDisplay from "./components/imageDisplay";
import ImageUploadForm from "./components/imageUploadForm";
import SearchBar from "./components/searchBar";
import useImages from "./hooks/useImages";
import { Modal } from "@mui/material";
import styled from "styled-components";

const MainAppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopBarContainer = styled.div`
  display: flex;
  width: 76%;
  margin: auto;
  justify-content: space-between;
  position: sticky;
  top: 2rem;
  z-index: 1;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: black;
`;
const StyledButton = styled.button`
  background-color: #c4f2ae;
  border-radius: 5px;
  color: black;
`;
const StyledModal = styled(Modal)`
  height: 50%;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  opacity: 1;
  background-color: black;
  border-radius: 5px;
`;

const App: React.FC = () => {
  const { images, fetchImages, setImages, uploadImage, deleteImage } =
    useImages();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainAppContainer>
      <TopBarContainer>
        <SearchBar
          searchImages={images}
          setImages={setImages}
          handleFetchImages={fetchImages}
        />
        <StyledButton onClick={handleOpen}>Upload Image</StyledButton>
      </TopBarContainer>
      <StyledModal open={open} onClose={handleClose}>
        <ImageUploadForm
          handleUpload={uploadImage}
          handleCloseModal={handleClose}
        />
      </StyledModal>
      <ImageDisplay displayImages={images} handleDeleteImage={deleteImage} />
    </MainAppContainer>
  );
};

export default App;
