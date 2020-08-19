import React, { Component } from 'react'

const Receipts = ({ receipts }) => {
  return (
    <div>
    <h1>Receipts</h1>
    {receipts.map((receipt) => (
      <h2>{receipt.title}</h2>
    ))}
    </div>
  )
}

export default Receipts
