import React from 'react'
import { connect } from 'react-redux'

const Status = ({status}) => (
  status
    ? <span className='status'>{status}</span>
    : null
)

export default connect(
  (state) => ({status: state.status})
)(Status)