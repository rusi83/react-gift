import propTypes from 'prop-types'
import { GiftItem } from './GiftItem';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { LoadingComponent } from './LoadingComponent';


export const GiftGrid = ({ category, onDeleteCategory }) => {
  const { images, isLoading } = useFetchGifts( category )


  const renderGiftItems = () => {
    return images.map( img =>(
      <GiftItem key={img.id} {...img} />
    ))
  }

  const buttonStyle = {
    position: 'absolute',
    right: '50px',
    // top: '10px',
  }

  const catToDelete = () => {
    onDeleteCategory(category);
  }

  return (
    <>
      <h3>{category}</h3>
      <LoadingComponent isLoading={isLoading}/>
      <div className="card-grid">
        {renderGiftItems()}
        <button
          style={ buttonStyle }
          onClick={catToDelete}
        >
          delete
        </button>
      </div>
    </>
  )
}


GiftGrid.propTypes = {
  category: propTypes.string.isRequired,
  onDeleteCategory: propTypes.func.isRequired
}
