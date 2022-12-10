
import { useAppSelector } from '../../store/hooks'
import CartItem from './cartItem';


function CartContainer() {
  //grab our state from the store using useAppSelector
  const cart = useAppSelector((state)=> state.cart.products)
  //ui to display that our cart is currently empty
  if(cart.length === 0){
    return <h1>Currently ur Cart is empty</h1>
  }
  return (
    <div>
      {/* //here we use spreed operator to pass an object to component as props */}
        {cart.map((item)=> <CartItem key={item.name} book={item}/>)}
    </div>
  )
}

export default CartContainer
