import React from 'react'
import { IProduct } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { removeFromCart,incrementQuantity,decrementQuantity } from '../../store/features/cartSlice';
import IncQtyBtn from '../btns/incQtyBtn';
import SubQtyBtn from '../btns/subQtyBtn';
import Checkout from '../btns/checkout';
import Remove from '../btns/remove';

//declare interface for our props object

interface CartItemProps {
  book:IProduct
}


function CartItem({book}:CartItemProps) {
  //assign global useAppDispatch to local var;
  const dispatch = useAppDispatch();
  //define handler function to remove item from products array;
  const removeItemHandler=()=>{
    dispatch(removeFromCart(book))
  }
  //define handler function to increase quantity of certain item
  const increaseQuantityHandler = ()=>{
    dispatch(incrementQuantity(book))
  }
  //define handler function to decrease quantity of certain item
  const decrementQuantityHandler=()=>{
    dispatch(decrementQuantity(book))
  }
  return (
    <div className='flex flex-row justify-between m-3 p-2 border-2 border-slate-600 rounded'>
      <div className='p-3 m-2'>{book.name}</div>
      <div className='flex flex-row justify-between'>
        <div className='p-3 m-2'>
          <span className=''>Quantity:</span>
        </div>
        <div className='flex flex-col items-center'>
        <IncQtyBtn handleIncQty={increaseQuantityHandler}/>
        <span className='border-2 border-slate-600 rounded-full p-2' >{book.quantity}</span>
        <SubQtyBtn handleSubQty={decrementQuantityHandler}/>
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