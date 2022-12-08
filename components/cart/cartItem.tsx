import React from 'react'
import { IProduct } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { removeFromCart } from '../../store/features/cartSlice';
import AddBtn from '../btns/addBtn';
import SubtractBtn from '../btns/subtractBtn';
import Checkout from '../btns/checkout';
import Remove from '../btns/remove';



interface CartItemProps {
  book:IProduct
}


function CartItem({book}:CartItemProps) {
  const dispatch = useAppDispatch();
  const removeItemHandler=()=>{
    dispatch(removeFromCart(book))
  }
  return (
    <div className='flex flex-row justify-between m-3 p-2 border-2 border-slate-600 rounded'>
      <div className='p-3 m-2'>{book.name}</div>
      <div className='flex flex-row justify-between'>
        <div className='p-3 m-2'>
          <span className=''>Quantity:</span>
        </div>
        <div className='flex flex-col items-center'>
        <AddBtn />
        <span className='border-2 border-slate-600 rounded-full p-2' >{book.quantity}</span>
        <SubtractBtn />
        </div>
      </div>
      <div className='p-3 m-2'>Price: {book.price} $</div>
      <div className='p-3 m-2'><span>Total: {book.price * book.quantity}</span></div>
      <div>
        <Remove handler={removeItemHandler}/>
      </div>
      <div>
        <Checkout />
      </div>
    </div>
  )
}

export default CartItem