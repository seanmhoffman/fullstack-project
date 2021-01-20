import React from 'react'
import { connect } from 'react-redux'
import loading from '../loading.gif'

const Loading = ({isLoading}) => {
  if (isLoading) {
    return (
    <div className='loading'>
      <img src={loading} alt='loading...' />
    </div>
    )
  } else {
    return ''
  }
}

export default connect(
  (state) => ({isLoading: state.isLoading})
)(Loading)