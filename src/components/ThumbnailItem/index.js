import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickImage = () => {
    setActiveId(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
