import React from 'react'

const BreedItem = () => {
  return (
    <li className="breed-image">
      <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
      <span>Black Labrador</span>
      <div className="favorite">
        <span className="love_it">😍</span>
      </div>
    </li>
  )
}

export default BreedItem