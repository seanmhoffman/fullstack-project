import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFavorite } from '../reducers'

class FavoriteItem extends Component {
  render() {
    return (
      <li className="breed-image">
        <img src={this.props.image_url} alt={this.props.name} />
        {this.props.name}
        <div className="unfavorite" onClick={() => this.props.deleteFavorite(this.props.breed_id)}>
          <span className="remove_it" role="img" aria-label="unfavorite">✘</span>
        </div>
      </li>
    )
  }
}

export default connect(
  null,
  {deleteFavorite}
)(FavoriteItem)