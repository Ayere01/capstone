"use client";
import React from "react";
import { useCart } from "./Cart";
import Image from "next/image";


export default function Cart() {
  const { cartItems, setCartItems } = useCart();
 

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Empty Cart</p>
      ) : (
        cartItems.map((works, index) => (
          <div key={index}>
            <nav><Image src={`/paint${works.id}.jpeg`} alt={works.id} width={130} height={130}/></nav>
            <h2>{works.title}</h2>
            <p>Price: &#8358;{(works.totalPrice).toFixed(2)}</p>
            <p>Quantity: {works.quantity}</p>
            <button className=" border bg-gray-500"> check out</button>
          </div>
        ))
      )}
    </div>
  );
}
