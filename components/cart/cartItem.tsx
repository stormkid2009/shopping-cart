import React from 'react'
import { IProduct } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { removeFromCart } from '../../store/features/cartSlice';

interface CartItemProps {
  book:IProduct
}


function CartItem({book}:CartItemProps) {
  const dispatch = useAppDispatch();
  
  return (
    <div className='flex flex-row justify-between m-3 p-2 border-2 border-slate-600 rounded'>
      <div className='p-3 m-2'>{book.name}</div>
      <div className='flex flex-row justify-between'>
        <div className='p-3 m-2'>
          <span className=''>Quantity:</span>
        </div>
        <div className='flex flex-col items-center'>
        <button className='bg-black text-white p-2'>+</button>
        <span className='border-2 border-slate-600 rounded-full p-2' >{book.quantity}</span>
        <button className='bg-black text-white p-2'>-</button>
        </div>
      </div>
      <div className='p-3 m-2'>Price: {book.price} $</div>
      <div>
        <button className='bg-red-700 rounded-md p-2 m-2' onClick={()=>dispatch(removeFromCart(book))}
        >Remove</button>
      </div>
      <div>
        <button className='bg-blue-700 rounded-md p-2 m-2'>Checkout</button>
      </div>
    </div>
  )
}

export default CartItem