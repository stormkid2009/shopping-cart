interface SubQtyProps {
  handleSubQty:()=>void;
}

function SubQtyBtn({handleSubQty}:SubQtyProps) {
  return (
    <button className='bg-black text-white p-2' onClick={handleSubQty}><span><em>-</em></span></button>
  )
}

export default SubQtyBtn