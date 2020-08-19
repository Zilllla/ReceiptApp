import Header from './components/Header.js'
import Main from './components/Main.js'
import './App.css';

import React, { Component } from 'react'


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
