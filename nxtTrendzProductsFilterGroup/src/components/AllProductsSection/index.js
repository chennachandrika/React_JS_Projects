import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    apiStatus: 100,
    activeOptionId: sortbyOptions[0].optionId,
    category: '',
    rating: '',
    titleSearch: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: 100,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {activeOptionId, category, rating, titleSearch} = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${category}&title_search=${titleSearch}&rating=${rating}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    this.setState({apiStatus: response.status})

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: 200,
      })
    } else {
      this.setState({apiStatus: 404})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  onChangeTitleSearch = event => {
    if (event.keyCode === 13) {
      this.setState({titleSearch: event.target.value}, this.getProducts)
    } else {
      this.setState({titleSearch: event.target.value})
    }
  }

  onSelectCategory = selectedCategory => () => {
    this.setState({category: selectedCategory}, this.getProducts)
  }

  onSelectRating = selectedRating => () => {
    this.setState({rating: selectedRating}, this.getProducts)
  }

  onClickClearFilters = () => {
    this.setState(
      {
        titleSearch: '',
        category: '',
        rating: '',
        activeOptionId: sortbyOptions[0].optionId,
      },
      this.getProducts,
    )
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state

    // TODO: Add No Products View
    const renderNoProductsView = () => (
      <div className="no-product-view">
        <img
          className="no-products-img"
          alt="no products"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        />
        <h1>No Products Found</h1>
        <p>We Cound not find any product. Try another filters.</p>
      </div>
    )
    console.log(productsList)

    return productsList.length > 0 ? (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    ) : (
      renderNoProductsView()
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  // TODO: Add failure view
  renderFailureView = () => (
    <div className="no-product-view">
      <img
        className="no-products-img"
        alt="products failure"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble processing your request.</p>
    </div>
  )

  renderPageView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 100:
        return this.renderLoader()
      case 200:
        return this.renderProductsList()
      case 404:
        return this.renderFailureView()
      default:
        return this.renderLoader()
    }
  }

  render() {
    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <FiltersGroup
          onChangeTitleSearch={this.onChangeTitleSearch}
          onSelectCategory={this.onSelectCategory}
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          onSelectRating={this.onSelectRating}
          onClickClearFilters={this.onClickClearFilters}
        />
        {this.renderPageView()}
      </div>
    )
  }
}

export default AllProductsSection
