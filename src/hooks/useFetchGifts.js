import { useState, useEffect } from 'react';
import { getGift } from "../helpers"

export const useFetchGifts = (category) => {

  const [Images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async (category) => {
    const newImages = await getGift(category)
    setImages(newImages)
    setIsLoading(false)
  }

/*  useEffect allows to execute a function when the component is rendered
    useEffect only execute  the function when the category change,
    so others states changes don't trigger the function, this avoids
    making unnecessary call when typing a new category in the text box,
    ensuring that only the new category triggers the call
*/
  useEffect(() => {
    getImages(category);
  }, [category]);

  return {
    images: [...Images],
    isLoading,
  }
}
