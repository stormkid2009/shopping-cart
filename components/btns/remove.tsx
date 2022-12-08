import React from 'react'

interface RemoveProps {
  handler:()=>void;
}

function Remove({handler}:RemoveProps) {
  return (
    <button className='bg-red-700 rounded-md p-2 m-2' onClick={handler}><span>Remove</span></button>
  )
}

export default Remove