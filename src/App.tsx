import { useState } from 'react'
import ImageDisplay from './components/imageDisplay'
import ImageUploadForm from './components/imageUploadForm'
import SearchBar from './components/searchBar'
import useImages from './hooks/useImages'
import { Modal } from '@mui/material'
import styled from 'styled-components'

const MainAppContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`
const TopBarContainer = styled.div`
display: flex;
justify-content: space-evenly;
`
const StyledModal = styled(Modal)`
  height: 50%;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  opacity: 1;
  background-color: pink;
`

const App: React.FC = () => {
  const {images, fetchImages, setImages, uploadImage, deleteImage} = useImages()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <MainAppContainer>
      <TopBarContainer>
        <SearchBar searchImages={images} setImages={setImages} handleFetchImages={fetchImages}/>
        <button onClick={handleOpen}>Upload a new image</button>
      </TopBarContainer>
      <StyledModal
        open={open}
        onClose={handleClose}
      >
        <ImageUploadForm handleUpload={uploadImage} handleCloseModal={handleClose}/>
      </StyledModal>
      <ImageDisplay displayImages={images} handleDeleteImage={deleteImage}/>
    </MainAppContainer>
  )
}

export default App
