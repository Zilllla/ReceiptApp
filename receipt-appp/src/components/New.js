import React, { Component } from 'react'

class New extends Component {
  render() {
    return (
      <div>
      <h3>Form Component</h3>
      <form>
        Title: <input type="text" name="title" /> <br/>
        Description: <input type="text" name="description" /> <br/>
        Ingredients:
        <br/>
          <input type="text" name="ing1" placeholder="Ingredient"/>
          <input type="number" name="amount" placeholder="Amount"/>
          <input type="text" name="unit" placeholder="Unit"/>
        <br/>
          <input type="text" name="ing2" placeholder="Ingredient"/>
          <input type="number" name="amount" placeholder="Amount"/>
          <input type="text" name="unit" placeholder="Unit"/>
        <br/>
          <input type="text" name="ing3" placeholder="Ingredient"/>
          <input type="number" name="amount" placeholder="Amount"/>
          <input type="text" name="unit" placeholder="Unit"/>
        <br/>
          <input type="text" name="ing4" placeholder="Ingredient"/>
          <input type="number" name="amount" placeholder="Amount"/>
          <input type="text" name="unit" placeholder="Unit"/>
        <br/>
          <input type="text" name="ing5" placeholder="Ingredient"/>
          <input type="number" name="amount" placeholder="Amount"/>
          <input type="text" name="unit" placeholder="Unit"/>
        <br/>
          <input type="text" name="ing6" placeholder="Ingredient"/>
          <input type="number" name="amount" placeholder="Amount"/>
          <input type="text" name="unit" placeholder="Unit"/>
        <br/>

        Instructions: <input type="text" name="instructions" /><br/>
        Images:
        <br/>
          <input type="text" name="img1" /> <br/>
          <input type="text" name="img2" /> <br/>
          <input type="text" name="img3" /> <br/>
          <input type="text" name="img4" /> <br/>
          <input type="text" name="img5" /> <br/>
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
