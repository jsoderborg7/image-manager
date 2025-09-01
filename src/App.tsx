import ImageDisplay from './components/imageDisplay'
import useImages from './hooks/useImages'

const App: React.FC = () => {
  const {images} = useImages()

  return (
    <>
    <ImageDisplay displayImages={images}/>
    </>
  )
}

export default App
