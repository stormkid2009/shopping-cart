//declare interface for props (handler function in this case)
//notice here that we set the property of interface the same name like the porps we send which have value of function

interface IncreaseQuantityProps {
  handleIncQty:()=>void;
}
function IncQtyBtn({handleIncQty}:IncreaseQuantityProps) {
  return (
    <button className='bg-black text-white p-2' onClick={handleIncQty}><em>+</em></button>
  )
}

export default IncQtyBtn