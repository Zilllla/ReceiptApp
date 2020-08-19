
import React, { Component } from 'react'
import Receipts from './Receipts.js'
import New from './New.js'

const baseURL = 'http://localhost:4000/'

class Main extends Component {
  state = {
    receipts: []
  }

  fetchData = () => {
    fetch(`${baseURL}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ receipts: data })
    })
    .catch(console.log)
  }

  handleCreate = (createData) => {
    fetch(`${baseURL}`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'apllication/json'
      }
    }).then(createdPost => {
      return createdPost.json()
    }).then(jsonedPost => {
      this.setState(prevState => {
        prevState.receipts = jsonedPost
        return {
          receipts: prevState.receipts
        }
      })
    }).catch(error => console.log(error))
}

componentDidMount() {
  this.fetchData()
}

  render() {
    return (
      <div>
        <New
          handleCreate={this.handleCreate}
          formInputs={this.props.formInputs}
        />
        <Receipts
          receipts={this.state.receipts}
        />
      </div>
    )
  }
}

export default Main;
