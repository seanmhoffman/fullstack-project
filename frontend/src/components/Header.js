import React from 'react'
import { connect } from 'react-redux'
import BreedForm from './BreedForm'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = ({favorites}) => {
  let favoriteLink = "";
  if (favorites.length > 0) {
    favoriteLink = <Link to="/favorites"><span role="img" aria-label="heart">♥️</span> View Favorites ({favorites.length})</Link>
  }

  // This is a list of ids of images from https://picsum.photos
  // that include dogs and one or two landscape photos

  // let bgIds = [237, 1062, 112, 129, 169, 659, 718, 1025]

  // Any time the header is rendered I randomly choose an image ID
  // and display it as the background for the hero banner

  // let background_id = bgIds[Math.floor(Math.random() * bgIds.length)]
  let background_url = `https://picsum.photos/id/1062/1024`

  const divStyle = {
    backgroundImage: 'url(' + background_url + ')'
  }

  return (
    <header className="hero-banner" style={divStyle}>
      <h1>Dog[img]</h1>

      <Switch>
        <Route path="/favorites">
          <Link to="/">Home</Link>
        </Route>
        <Route path="/">
          <BreedForm />
          {favoriteLink}
        </Route>
      </Switch>
    </header>
  )
}

export default connect(
  (state) => ({favorites: state.favorites})
)(Header)