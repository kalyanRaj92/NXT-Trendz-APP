import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const { searchInput,
          changeSearchInput,
          enterSearchInput,

          categoryOptions,
          changeCategory,
          activeCategoryId,

          ratingsList,
          changeRating,
          activeRatingId,

          clearFilters } = props

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
   changeSearchInput(event.target.value)
  }
  
  // SearchInput
  const renderSearchInput = () => (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  

 // Category 
  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">
        {categoryOptions.map(category =>(
            <li className="category-item" 
                key={category.categoryId}
                onClick={() => changeCategory(category.categoryId)}>
                 <p className={category.categoryId === activeCategoryId ? 
                    `category-name active-category-name`: `category-name`}>
                      {category.name}
                 </p>
            </li>
        ))}
      </ul>
    </>
  )

  // Rating
  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">
        {ratingsList.map(rating =>(
          <li
            className="rating-item"
            key={rating.ratingId}
            onClick={() => changeRating(rating.ratingId)}
          >
            <img
              src={rating.imageUrl}
              alt={`rating ${rating.ratingId}`}
              className="rating-img"
            />
            <p className={ activeRatingId === rating.ratingId ?
              `and-up active-rating` : `and-up`}>
                & up
            </p>
          </li>
        ))}
      </ul>
    </div>
  )


  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup