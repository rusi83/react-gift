export const GiftItem = ( images ) => {
  return (
    <div className="card">
      <img src={images.url} alt={images.title} />
    </div>
  )
}
