"use client"
import Image from 'next/image'
import Link from 'next/link'
import { RiShoppingBasketLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaShippingFast } from 'react-icons/fa';
import { useCart } from '../cart/Cart';


export default function Navbar() {
    const {cartItems, setCartItems } = useCart();
    const {totalCart , setTotalCart} = useCart();
    const {totalItem, setTotalItem} = useCart(0);
    const {addToCart}  = useCart()
  
    const [cart, setCart] = useState(0)
    const [open, setOpen] = useState(true)

    function controlNav(){
        setOpen(!open)
    }

  return (
    <nav className="flex justify-between px-[2rem] py-8 bg-gray-200  inset-x-0 z-50 fixed">
        <ul className="flex items-start gap-4">
            <li>
                <Link href="/">
                <Image src="/logo.png" alt='logo' width="32" height="32" />
                </Link>
            </li>
            <li>
                <Link href="/" className="flex flex-col">
                    <span>coderite</span>
                    <span>coding for Arica</span>
                </Link>
            </li>
        </ul>
       <div className="flex flex-col">
            <ul className={`md:hidden ${open ? 'flex' : 'hidden'}`}>
                <li onClick={controlNav}>
                <GiHamburgerMenu/>
                </li>
            </ul>
            <ul className={`hidden ${open ? 'hidden' : 'flex'}`}> 
                <li onClick={controlNav}>
                < RxCross1/>
                </li>
            </ul>
            <ul className={`md:flex ${open ? 'hidden' : 'flex flex-col' }justify-center gap-6`}>
            <li>
                <Link href="/login">Log In</Link>
                </li>
                <li>
                <Link href="/art">Art</Link>
                </li>
                <li>
                <Link href="/about">About</Link>
                </li>
                <li>
                <Link href="/contact">Contact</Link>
                </li>
                <div className=' flex pl-8 w-10 h-8 border border-gray-500 rounded-md justify-center text-xl'>
                    <li>
                        <Link href="/cart" className="flex items-center gap-2">
                            <span className=' flex w-7 h-8 justify-center items-center bg-gray-500 rounded-md text-xl'>
                            <RiShoppingBasketLine/> 
                            </span>
                            <span className=' flex pr-12 justify-center items-center'>{totalItem}</span>
                        </Link>
                    </li>
                </div>
            </ul>

            <div className=' flex justify-center fixed inset-x-0 top-[110px] bg-gray-500 z-50 '>
            < FaShippingFast className='text-2xl'/>
            <span className='text-lg font-extrabold'>Free Shipping :</span>
            <span className='text-center items-center text-xl'> on all orders above &#8358;50 </span>

    </div>
       </div> 
    </nav>
  )
}
