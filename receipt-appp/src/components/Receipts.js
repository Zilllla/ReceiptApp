import React, { Component } from 'react';
import Elastic from 'react-elastic-carousel'

const Receipts = ({ receipts }) => {
  return (
    <div>
    <h1>Receipts</h1>
    {receipts.map((receipt) => (
      <div>
      <h2>{receipt.title}</h2>
      <h4>{receipt.description}</h4>
      <ul>
        <li>{receipt.ingredients.ing1.name}</li>
          <ul>
            <li>{receipt.ingredients.ing1.amount} {receipt.ingredients.ing1.unit}</li>
          </ul>
        <li>{receipt.ingredients.ing2.name}</li>
            <ul>
              <li>{receipt.ingredients.ing2.amount} {receipt.ingredients.ing2.unit}</li>
            </ul>
        <li>{receipt.ingredients.ing3.name}</li>
            <ul>
              <li>{receipt.ingredients.ing3.amount} {receipt.ingredients.ing3.unit}</li>
            </ul>
      </ul>
      <h4>{receipt.instructions}</h4>
      <Elastic itemsToShow={1}>
        <img src={receipt.images.img1} />
        <img src={receipt.images.img2} />
        <img src={receipt.images.img3} />
        <img src={receipt.images.img4} />
        <img src={receipt.images.img5} />
      </Elastic>
      </div>
    ))}
    </div>
  )
}

export default Receipts

//notes:
// for images, is there a faster way to do this? maybe a for loop instead of typing out each one.

//5 img spaces available. How should i resolve emply img strings? ie how can I keep those from showing up as just blank on carousel.

//need to figure out a way to loop through nested objects in ingrediets. maybe same solution as img loop? maybe use another map?
