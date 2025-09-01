import { useState, type ChangeEvent } from "react";
import type { Image } from "../hooks/useImages";

interface searchBarProps {
    searchImages: Image[]
    setImages: (images: Image[]) => void
    handleFetchImages: () => void
}
const SearchBar: React.FC<searchBarProps> = ({searchImages, setImages, handleFetchImages}) =>{
    const [searchInput, setSearchInput] = useState("")
    const [resetVisible, setResetVisible] = useState(false)
    
    const handleInput = (e: ChangeEvent<HTMLInputElement>) =>{
        const standardCase = e.target.value.toLowerCase()
        setSearchInput(standardCase)
    }
    const handleSearch = () =>{
        const filteredImages = searchImages.filter((img) => img.name.toLowerCase().includes(searchInput))
        setImages(filteredImages)
        setSearchInput("")
        setResetVisible(true)
    }
    const handleReset = () =>{
        handleFetchImages()
        setResetVisible(false)
    }
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if (e.key === 'Enter'){
            handleSearch()
        }
    }
    return(
<>
        {resetVisible ?
            <button onClick={handleReset}>Reset</button>
            :
            <>
            <input
            type="text"
            placeholder="Search Image"
            value={searchInput}
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyPress(e)}
            />
            <button onClick={handleSearch}>Search</button>
            </>
        }
        </>
    )
}
export default SearchBar