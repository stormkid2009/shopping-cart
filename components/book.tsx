import React,{useState} from 'react';
import { useAppSelector,useAppDispatch } from '../store/hooks';
import { addToCart,reset,removeFromCart } from '../store/features/cartSlice';
import {IProduct} from '../types'

interface BookProps{
  book:IProduct
}
function Book({book}:BookProps) {
   // The `state` arg is correctly typed as `RootState` already
   const cart = useAppSelector((state)=>state.cart.products);
   const dispatch = useAppDispatch();
   const index = cart.findIndex((item)=> item.name === book.name)
   //console.log(cart)
  return (
    <div className='p-4 m-4 border border-slate-600'>
        <h1>Title: {book.name}</h1>
        <p>Description: {book.description}</p>
        <p>Price:{book.price} $</p>
        <p>Quantity: {book.quantity}</p>
        {
          index > -1 ? <button className='bg-slate-200 m-2 p-2'
          onClick = {()=> dispatch(removeFromCart(book))}
          >Remove From Cart</button>
          :<button className='bg-slate-200 m-2 p-2'
          onClick={()=> dispatch(addToCart(book))}>Add To cart</button>
        }
        
        
    </div>
  )
}

export default Book