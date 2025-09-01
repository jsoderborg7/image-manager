import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ImageUpload } from "../hooks/useImages";
import { Alert } from "@mui/material";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 50%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #c4f2ae;

`;
const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledInput = styled.input`
    width: 50%;
    padding: 1rem;
    border-radius: 5px;
    border: 2px solid #c4f2ae;
`
const StyledButton = styled.button`
  background-color: #c4f2ae;
  color: black;
  border-radius: 5px;
`;
interface UploadProps {
  handleUpload: (image: ImageUpload) => void;
  handleCloseModal: () => void;
}

const ImageUploadForm: React.FC<UploadProps> = ({
  handleUpload,
  handleCloseModal,
}) => {
  const [imageName, setImageName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!imageName || !file) {
      setErrorMessage(
        "Image selection and name are required, please select an image and give it a name!"
      );
      console.log(errorMessage);
    } else {
      file &&
        imageName &&
        handleUpload({ name: imageName, imageUrl: URL.createObjectURL(file) });
      setImageName("");
      setFile(null);
      setErrorMessage("");
      handleCloseModal();
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmitForm}>
        <StyledContainer>
        <label>Name Your Image:</label>
        <StyledInput
          type="text"
          placeholder="Image Name"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
        />
        </StyledContainer>
        <StyledInput type="file" accept="image/*" onChange={handleChange} />
        <StyledButton type="submit">Upload</StyledButton>
      </StyledForm>
      {errorMessage && (
        <Alert severity="warning">Both file and name are required</Alert>
      )}
    </>
  );
};
export default ImageUploadForm;
