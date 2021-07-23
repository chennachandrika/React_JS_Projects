import './index.css'

const ThumbnailItem = props => {
  const {data, onSelectImage, selectedImageId} = props
  const {thumbnailUrl, thumbnailAltText, id} = data
  const onSelectImgThumbnail = () => {
    onSelectImage(id)
  }
  return (
    <li>
      <button type="button" className="button">
        <img
          onClick={onSelectImgThumbnail}
          className={`thumbnail-img ${
            selectedImageId === id && 'selected-thumbnail'
          }`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
