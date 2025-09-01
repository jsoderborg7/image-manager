import axios, { type AxiosResponse } from "axios"
import { useState, useEffect } from "react";

export interface Image {
    id: string,
    name: string,
    imageUrl: string
}

export interface ImageUpload {
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

  const uploadImage = async (data: ImageUpload) =>{
    try {
        axios.post("http://localhost:3000/images", {
            name: data.name,
            imageUrl: data.imageUrl
        })
        .then((response: AxiosResponse<Image>) =>{
            setImages([...images, response.data])
        })
    } catch (err) {
        console.error(err)
    }
  }

  const deleteImage = async (id: string) =>{
    try {
        axios.delete(`http://localhost:3000/images/${id}`)
        console.log('deleted!')
        const filteredImages = images.filter((img) => img.id !== id)
        setImages(filteredImages)
    } catch (err) {
        console.error(err)
    }
  }

  return{
    images,
    uploadImage,
    deleteImage
  }
}
export default useImages