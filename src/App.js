import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Footer></Footer>


         {this.props.children}
      </div>
    );
  }
}

export default App;
