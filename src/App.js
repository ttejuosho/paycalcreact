import React, { Component } from 'react';
import Nav from './components/nav';
import Carousel from './components/carousel';
import Form from './components/form';
import Results from './components/results';
import './App.css';



class App extends Component {
  render() {
    return (
      <div id="container">
        <Nav />
        <Carousel />
        <Form />
        <Results />
      </div>
    )
  }
}


export default App;