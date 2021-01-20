import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateQuery, searchBreeds } from '../reducers'

class BreedForm extends Component {
  handleInputChange = (event) => {
    const value = event.target.value
    this.props.updateQuery(value)
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchBreeds(this.props.currentQuery)
  }

  render() {
    const { currentQuery } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.handleInputChange}
          placeholder="Search for Dogs by Breed..."
          value={currentQuery}/>
      </form>
    )
  }
}

export default connect(
  (state) => ({currentQuery: state.currentQuery}),
  {updateQuery, searchBreeds}
)(BreedForm)