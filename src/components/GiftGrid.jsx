import { useEffect, useState } from 'react';
import propTypes from 'prop-types'
import { getGift } from '../helpers';
import { GiftItem } from './GiftItem';


export const GiftGrid = ({ category }) => {
  const [Images, setImages] = useState([])

  const getImages = async (category) => {
    const newImages = await getGift(category)
    setImages(newImages)
  }


/*  useEffect allows to execute a function when the component is rendered
  useEffect only execute the function when the category change,
  so others states changes don't trigger the function */
  useEffect(() => {
    getImages(category);
  }, [category]);


  return (
    <>
      <h3>{category}</h3>
      <ol>
        { GiftItem(Images) }
      </ol>
    </>
  )
}

GiftGrid.propTypes = {
  category: propTypes.string.isRequired
}
