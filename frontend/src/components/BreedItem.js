import React, { Component } from 'react'
import { connect } from 'react-redux'
import loading from '../loading-image.gif'
import { saveFavorite, deleteFavorite,  } from '../reducers'
import { loadImage } from '../lib/apiServices'

class BreedItem extends Component {
  constructor(props) {
    super(props)
    this.state = { isImageLoaded: false, image_url: '' }
  }
  componentDidUpdate() {
    if (this.props.isVisible && !this.state.isImageLoaded) {
      loadImage(this.props.reference_image_id)
      .then(response => {
        this.setState({ image_url: response.data.url, isImageLoaded: true })
      })
    }
  }
  render() {
    const favorite = {
      breed_id:   this.props.id,
      name: this.props.name,
      image_url: this.state.image_url,
    }

    const { isImageLoaded } = this.state

    let image, name_display, favorite_display
    if (isImageLoaded) {
      image = <img src={this.state.image_url} alt={this.props.name} />
    } else {
      image = <img className="loading" src={loading} alt={`Loading ${this.props.name}`} />
    }

    if (this.props.favorited) {
      name_display = <span className="favorited" role="img" aria-label="favorited">⭐ {this.props.name}</span>
      
      favorite_display =  (
        <div className="unfavorite" onClick={() => this.props.deleteFavorite(this.props.favorite.breed_id)}>
          <span className="remove_it" role="img" aria-label="unfavorite">✘</span>
        </div>
      )
    } else {
      name_display = <span>{this.props.name}</span>

      favorite_display =  (
        <div className="favorite" onClick={() => this.props.saveFavorite(favorite)}>
          <span className="love_it" role="img" aria-label="favorite">😍</span>
        </div>
      )
    }

    return (
      <li className="breed-image">
        {image}
        {name_display}
        {favorite_display}
      </li>
    )    
  }
}

export default connect(
  null,
  {saveFavorite, deleteFavorite}
)(BreedItem)