const renderImages = (images) => {
  return images.map(img => (
    <li key={img.id}>{img.title}</li>
  ));
};

export const GiftItem = (images) => {
  return (
    <div>{renderImages(images)}</div>
  )
}
