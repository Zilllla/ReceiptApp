import React, { Component } from 'react'
import Header from './components/Header.js'
import Main from './components/Main.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formInputs: {
        title: null,
        description: null,
        ingredients: {
          ing1: {
            name: null,
            amount: null,
            unit: null
          },
          ing2: {
            name: null,
            amount: null,
            unit: null
          },
          ing3: {
            name: null,
            amount: null,
            unit: null
          },
          ing4: {
            name: null,
            amount: null,
            unit: null
          },
          ing5: {
            name: null,
            amount: null,
            unit: null
          },
          ing6: {
            name: null,
            amount: null,
            unit: null
          }
        },
        instuctions: null,
        image: {
          img1: null,
          img2: null,
          img3: null,
          img4: null,
          img5: null
        },
        id: null
      }
    }
  }

  handleView = (postData) => {
    let formInputs = {
      title: '',
      description: '',
      ingredients: {
        ing1: {
          name1: '',
          amount1: '',
          unit1: ''
        },
        ing2: {
          name2: '',
          amount2: '',
          unit2: ''
        },
        ing3: {
          name3: '',
          amount3: '',
          unit3: ''
        },
        ing4: {
          name4: '',
          amount4: '',
          unit4: ''
        },
        ing5: {
          name5: '',
          amount5: '',
          unit5: ''
        },
        ing6: {
          name6: '',
          amount6: '',
          unit6: ''
        }
    },
      instructions: '',
      images: {
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: ''
      },
      id: null
    }
    this.setState({
      formInputs: formInputs
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          handleView={this.handleView}
          formInputs={this.state.formInputs}
        />
      </div>
    )
  }
}

export default App;
