import './index.css'

const FiltersGroup = props => {
  const {
    onChangeTitleSearch,
    categoryOptions,
    onSelectCategory,
    ratingsList,
    onSelectRating,
    onClickClearFilters,
  } = props

  const onChangeSearchTitle = event => {
    onChangeTitleSearch(event)
  }

  return (
    <div className="filters-group-container">
      <input type="search" onKeyDown={onChangeSearchTitle} />
      <h1>Category</h1>
      <ul className="category-list">
        {categoryOptions.map(option => (
          <li key={option.categoryId}>
            <p onClick={onSelectCategory(option.categoryId)} type="button">
              {option.name}
            </p>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="category-list">
        {ratingsList.map(option => (
          <li key={option.ratingId}>
            <button onClick={onSelectRating(option.ratingId)} type="button">
              <img
                className="rating-img"
                alt={`rating-${option.ratingId}`}
                src={option.imageUrl}
              />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={onClickClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
