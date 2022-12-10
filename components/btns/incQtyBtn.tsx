

interface IncreaseQuantityProps {
  handleIncQty:()=>void;
}
function IncQtyBtn({handleIncQty}:IncreaseQuantityProps) {
  return (
    <button className='bg-black text-white p-2' onClick={handleIncQty}><em>+</em></button>
  )
}

export default IncQtyBtn