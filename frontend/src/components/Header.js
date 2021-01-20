import React from 'react'
import BreedForm from './BreedForm'

const Header = () => {
  return (
    <header className="hero-banner">
      <h1>Dog[Img]</h1>
        <BreedForm />
      <a href="#">♥️ View Favorites</a>
    </header>
  )
}

export default Header