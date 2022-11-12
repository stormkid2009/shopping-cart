import React from 'react';
import 'tailwindcss/tailwind.css'
import Link from 'next/link';
import { useAppSelector } from '../../store/hooks';

function Navbar() {
    const cart = useAppSelector((state)=>state.cart.products);
    
  return (
    <ul className='flex flex-row justify-between text-red-700 m-4 p-4'>
        <li>Home</li>
        <li>Shop</li>
        <li>
            <Link href="/cart">
            <a >Cart</a>
            </Link>
            <div>{cart.length}</div>
        </li>
    </ul>
  )
}

export default Navbar