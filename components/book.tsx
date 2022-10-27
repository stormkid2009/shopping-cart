import React from 'react'
import {IProduct} from '../types'

interface BookProps{
  book:IProduct
}
function Book({book}:BookProps) {
  return (
    <div className='p-4 m-4'>
        <h1>Title: {book.name}</h1>
        <p>Description: {book.description}</p>
        <p>Price:{book.price} $</p>
        <p>Quantity: {book.quantity}</p>
        <hr />
    </div>
  )
}

export default Book