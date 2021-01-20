import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Status from './components/Status'
import Loading from './components/Loading'
import BreedList from './components/BreedList'
import FavoriteList from './components/FavoriteList';

import {
  Switch,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Status />
          <Loading />
          <Switch>
            <Route path="/favorites">
              <FavoriteList />
            </Route>
            <Route path="/">
              <BreedList />
            </Route>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
