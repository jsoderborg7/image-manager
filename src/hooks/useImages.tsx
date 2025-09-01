import axios, { type AxiosResponse } from "axios"
import { useState, useEffect } from "react";

export interface Image {
    id: number,
    name: string,
    imageUrl: string
}

const useImages = () =>{
  const [images, setImages] = useState<Image[]>([])  

  useEffect(() =>{
    const fetchImages = async () => {
        try {
            const response: AxiosResponse<Image[]> = await axios.get<Image[]>("http://localhost:3000/images")
            setImages(response.data)
        } catch (err) {
            console.error(err)
        }
    }
    fetchImages()
  },[])

  return{
    images
  }
}
export default useImages