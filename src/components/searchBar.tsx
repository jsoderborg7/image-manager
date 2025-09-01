import { useState, type ChangeEvent } from "react";
import type { Image } from "../hooks/useImages";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
`;
const StyledInput = styled.input`
  width: 50%;
  border-radius: 5px;
  border: 2px solid #c4f2ae;
  margin-right: 1rem;
`;
const StyledButton = styled.button`
  background-color: #c4f2ae;
  color: black;
  border-radius: 5px;
`;
interface searchBarProps {
  searchImages: Image[];
  setImages: (images: Image[]) => void;
  handleFetchImages: () => void;
}
const SearchBar: React.FC<searchBarProps> = ({
  searchImages,
  setImages,
  handleFetchImages,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [resetVisible, setResetVisible] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const standardCase = e.target.value.toLowerCase();
    setSearchInput(standardCase);
  };
  const handleSearch = () => {
    const filteredImages = searchImages.filter((img) =>
      img.name.toLowerCase().includes(searchInput)
    );
    setImages(filteredImages);
    setSearchInput("");
    setResetVisible(true);
  };
  const handleReset = () => {
    handleFetchImages();
    setResetVisible(false);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      {resetVisible ? (
        <StyledButton onClick={handleReset}>Reset</StyledButton>
      ) : (
        <SearchContainer>
          <StyledInput
            type="text"
            placeholder="Search Image"
            value={searchInput}
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </SearchContainer>
      )}
    </>
  );
};
export default SearchBar;
