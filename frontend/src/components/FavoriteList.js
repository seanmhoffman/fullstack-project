import React, { Component } from 'react'
import { connect } from 'react-redux'
import FavoriteItem from './FavoriteItem'
import { fetchFavorites } from '../reducers'

class FavoriteList extends Component {
  componentDidMount() {
    this.props.fetchFavorites()
  }
  render() {
    const favoriteListMarkup = (
      <ul>
        {this.props.favorites.map(favorite => {
          return (
            <FavoriteItem key={favorite.id} {...favorite} /> 
            )
        })}
      </ul>
    )
    const emptyListMarkup = (
      <div className="cta">Aww Darn, looks like you don't have any favorites. <br/ > Head back home and add some!</div>
    )
    return (
      <div className="favorite-list">
        <h3>You have {this.props.favorites.length} Favorite Breeds <span role="img" aria-label="dog">🐶</span></h3>
        {this.props.favorites.length > 0 ? favoriteListMarkup : emptyListMarkup}
      </div>
    )
  }
}

export default connect(
  (state) => ({favorites: state.favorites}),
  {fetchFavorites}
)(FavoriteList)