import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Status from './components/Status'
import Loading from './components/Loading'
import BreedList from './components/BreedList'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Status />
        <Loading />
        <BreedList />
      </section>
    </div>
  );
}

export default App;
