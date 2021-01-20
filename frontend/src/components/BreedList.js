import React, { Component } from 'react'
import { connect } from 'react-redux'
import BreedItem from './BreedItem'
import TrackVisibility from 'react-on-screen'
import { fetchFavorites } from '../reducers'

class BreedList extends Component {
  componentDidMount() {
    this.props.fetchFavorites()
  }
  render() {
    const breedListMarkup = (
      <ul>
        {this.props.breeds.map(breed => {
          let favorite = this.props.favorites.find(favorite => favorite.breed_id === breed.id)
          let favorited = favorite !== undefined
          return (
            <TrackVisibility key={breed.id} offset={1000} partialVisibility>
            <BreedItem
            worker={this.worker}
            favorite={favorite}
            favorited={favorited}
            {...breed} />
            </TrackVisibility>
          )
        })}
      </ul>
    )

    const emptyListMarkup = (
      <div className="cta">Enter a search term above to see matching breeds</div>
    )

    return (
      <div className="breed-list">
        {this.props.breeds.length > 0 ? (<h3>{this.props.breeds.length} matching Breeds</h3>) : '' }
        {this.props.breeds.length > 0 ? breedListMarkup : emptyListMarkup}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    breeds: state.breeds.filter(breed => {
      return breed['reference_image_id'] && breed['reference_image_id'] !== ''
    }),
    favorites: state.favorites
  }),
  {fetchFavorites}
)(BreedList)