import { useState } from 'react'
import ImageDisplay from './components/imageDisplay'
import ImageUploadForm from './components/imageUploadForm'
import useImages from './hooks/useImages'
import { Modal } from '@mui/material'

const App: React.FC = () => {
  const {images, uploadImage, deleteImage} = useImages()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
    <button onClick={handleOpen}>Upload a new image</button>
    <Modal
      open={open}
      onClose={handleClose}
    >
          <ImageUploadForm handleUpload={uploadImage} handleCloseModal={handleClose}/>

    </Modal>
    <ImageDisplay displayImages={images} handleDeleteImage={deleteImage}/>
    </>
  )
}

export default App
