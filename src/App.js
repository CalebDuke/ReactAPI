import React from 'react';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise'
// import { render } from '@testing-library/react';

class App extends React.Component {

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(obj => console.log(obj))
  }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
