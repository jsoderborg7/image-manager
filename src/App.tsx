import ImageDisplay from './components/imageDisplay'
import ImageUploadForm from './components/imageUploadForm'
import useImages from './hooks/useImages'

const App: React.FC = () => {
  const {images, uploadImage, deleteImage} = useImages()



  return (
    <>
    <ImageUploadForm handleUpload={uploadImage}/>
    <ImageDisplay displayImages={images} handleDeleteImage={deleteImage}/>
    </>
  )
}

export default App
