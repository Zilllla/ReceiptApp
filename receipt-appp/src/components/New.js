import React, { Component } from 'react'

class New extends Component {
  constructor(props) {
    super(props)
    this.state ={
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
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


  handleChange= (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefaut()
  }


  render() {
    return (
      <div>
      <h3>Form Component</h3>
      <form onSubmit={this.handleSubmit}>
        Title: <input type="text" id="title" value={this.state.title} onChange={this.handleChange} /> <br/>
        Description: <input type="text" id="description" value={this.state.description} onChange={this.handleChange} /> <br/>
        Ingredients:
        <br/>
          <input type="text" id="ing1" placeholder="Ingredient" value={this.state.ingredients.ing1.name} onChange={this.handleChange}/>
          <input type="number" id="amount1" placeholder="Amount" value={this.state.ingredients.ing1.amount} onChange={this.handleChange}/>
          <input type="text" id="unit1" placeholder="Unit" value={this.state.ingredients.ing1.unit} onChange={this.handleChange}/>
        <br/>
          <input type="text" id="ing2" placeholder="Ingredient" value={this.state.ingredients.ing2.name} onChange={this.handleChange}/>
          <input type="number" id="amount2" placeholder="Amount" value={this.state.ingredients.ing2.amount} onChange={this.handleChange}/>
          <input type="text" id="unit2" placeholder="Unit" value={this.state.ingredients.ing2.unit} onChange={this.handleChange}/>
        <br/>
          <input type="text" id="ing3" placeholder="Ingredient" value={this.state.ingredients.ing3.name} onChange={this.handleChange}/>
          <input type="number" id="amount3" placeholder="Amount" value={this.state.ingredients.ing3.amount} onChange={this.handleChange}/>
          <input type="text" id="unit3" placeholder="Unit" value={this.state.ingredients.ing3.unit} onChange={this.handleChange}/>
        <br/>
          <input type="text" id="ing4" placeholder="Ingredient" value={this.state.ingredients.ing4.name} onChange={this.handleChange}/>
          <input type="number" id="amount4" placeholder="Amount" value={this.state.ingredients.ing4.amount} onChange={this.handleChange}/>
          <input type="text" id="unit4" placeholder="Unit" value={this.state.ingredients.ing4.unit} onChange={this.handleChange}/>
        <br/>
          <input type="text" id="ing5" placeholder="Ingredient" value={this.state.ingredients.ing5.name} onChange={this.handleChange}/>
          <input type="number" id="amount5" placeholder="Amount" value={this.state.ingredients.ing5.amount} onChange={this.handleChange}/>
          <input type="text" id="unit5" placeholder="Unit" value={this.state.ingredients.ing5.unit} onChange={this.handleChange}/>
        <br/>
          <input type="text" id="ing6" placeholder="Ingredient" value={this.state.ingredients.ing6.name} onChange={this.handleChange}/>
          <input type="number" id="amount6" placeholder="Amount" value={this.state.ingredients.ing6.amount} onChange={this.handleChange}/>
          <input type="text" id="unit6" placeholder="Unit" value={this.state.ingredients.ing6.unit} onChange={this.handleChange}/>
        <br/>

        Instructions: <input type="text" id="instructions" value={this.state.instructions} onChange={this.handleChange} /><br/>
        Images:
        <br/>
          <input type="text" id="img1" value={this.state.img1} onChange={this.handleChange} /> <br/>
          <input type="text" id="img2" value={this.state.img2} onChange={this.handleChange} /> <br/>
          <input type="text" id="img3" value={this.state.img3} onChange={this.handleChange} /> <br/>
          <input type="text" id="img4" value={this.state.img4} onChange={this.handleChange} /> <br/>
          <input type="text" id="img5" value={this.state.img5} onChange={this.handleChange} /> <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default New;


//NOTES:
//would like to have 6 ingredient boxes show up automatically, then have a button to make more appear as necessary
//could possibly use interpolation and loops to loop through ingredients and images instead of typing out.
