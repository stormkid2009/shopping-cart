import React from 'react'
import Book from './book'
import  {IProduct}  from '../types'

//declare interface of books list props
interface ListProps{
  books:IProduct[]
}

function BooksList({books}:ListProps) {
  //console.log(books);
  return (
    <div>
      {books.map((b)=> (<Book key={b.name} book={b}/>))}
    </div>
  )
}

export default BooksList