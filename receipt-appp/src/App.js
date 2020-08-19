import Header from './components/Header.js'
import Receipts from './components/Receipts.js'
import './App.css';

import React, { Component } from 'react'

const baseURL = 'http://localhost:4000/'

class App extends Component {
  state = {
    receipts: []
  }

  componentDidMount() {
    fetch(`${baseURL}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ receipts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div>
        <Header />
        <h3>App Component</h3>
        <Receipts receipts={this.state.receipts} />
      </div>
    )
  }
}

export default App;
