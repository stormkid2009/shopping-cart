
//declare interface for props (handler function in this case)
//notice here that we set the property of interface the same name like the porps we send which have value of function
interface SubQtyProps {
  handleSubQty:()=>void;
}

function SubQtyBtn({handleSubQty}:SubQtyProps) {
  return (
    <button className='bg-black text-white p-2' onClick={handleSubQty}><span><em>-</em></span></button>
  )
}

export default SubQtyBtn