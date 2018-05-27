import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HEllo World</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
