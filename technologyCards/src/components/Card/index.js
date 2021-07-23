import './index.css'

const CardComponent = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  console.log(className)
  return (
    <div className={`${className} card-styling`}>
      <h1 className="title">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="tech-img" src={imgUrl} />
    </div>
  )
}

export default CardComponent
