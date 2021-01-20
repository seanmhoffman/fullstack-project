import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero-banner">
        <h1>Dog[Img]</h1>
        <form>
          <input type="text" placeholder="Search for Dogs by Breed..."/>
        </form>
        <a href="#">♥️ View Favorites</a>
      </header>
      <section className="main">
        <div className="status"></div>
        <div className="loading"></div>
        <div className="breed-list">
          <ul>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
            <li className="breed-image">
              <img src="https://picsum.photos/id/237/200/200" alt="Black Labrador" />
              <span>Black Labrador</span>
              <div className="favorite">
                <span className="love_it">😍</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
