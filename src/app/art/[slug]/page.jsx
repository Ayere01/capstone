"use client"
import React, { useEffect, useState } from "react";
import { artworks } from '../page'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from "@/app/cart/Cart";

export default function page({params}) {
  const { cartItems, setCartItems } = useCart();
  const { totalCart, setTotalCart } = useCart();
  const { totalItem, setTotalItem } = useCart(0);
  const { addToCart } = useCart();
  const { quant, setQuant } = useCart();
const artcard = artworks.find(works => works.title.split(' ').join('-') == params.slug)
const relatedArts = artworks.filter(works => (works.type == artcard.type) && (works.id !== artcard.id)).sort((a,b) => b.price - a.price).slice(0,3)

const fresh = window.location.pathname.split("/").slice(-1)[0];
function handleQuant(e){
    
  setQuant( e.target.value)
}
useEffect(() => {
 setQuant(1); // Reset quant state to default value
}, [params.slug]);

const relatedCat = relatedArts.map((works,index) => (
  <section key={index} className=' hover:shadow-2xl'>
    <Link href={`/art/${works.title.split(' ').join('-')}`}>
      <Image src={`/paint${works.id}.jpeg`} alt={works.id} width={130} height={130}/>
      <h2 className='flex text-2xl capitalize font-bold'>{works.title}</h2>
      <p className='flex capitalize font-bold bg-blend-color bg-gray-500'>&#8358;{works.price}</p>
    </Link>
  </section>
))

  return (
    <div>
    <section>

          <p className=" row-start-4 row-end-4 col-start-1 col-end-3 px-6 text-[20px] w-[90ch]"/>
      <span className=' flex justify-center'>
        <nav className=" flex-row">
        <Image src={`/paint${artcard.id}.jpeg`} alt={artcard.id} width={200} height={200}/>

          <input
            type="number"
            name="quant"
            id="quant"
            min={1}
            max={artcard.stock}
            value={quant}
            className=" border-2 border-gray-500 rounded-lg"
            onChange={handleQuant}
            
            />
          <button
            className="bg-gray-500 border"
            onClick={() => addToCart(artcard)}
            >
            Add to cart
          </button>
          </nav>
          </span>
      <nav className=' flex justify-center text-center text-xl bg-gray-500'>
        {artcard.title} &#8358;{artcard.price}
      </nav>
        <nav>
        {artcard.description}
        </nav>
        <div>
        <span className='flex text-center justify-center font-bold bg-gray-500'>Related Category</span>
        {relatedCat}
        </div>
    </section>
    </div>
  )
}
