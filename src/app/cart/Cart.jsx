"use client";
import React, { createContext, useState, useContext } from "react";
import { artworks } from "@/app/art/page";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [quant, setQuant] = useState(1);

  const artcard = artworks.find(
    (works) =>
      works.title.split(" ").join("-") ===
      window.location.pathname.split("/").slice(-1)[0]
  );
  //   const [addedItems, setAddedItems] = useState([]);
  //   const [quantity, setQuantity] = useState(0);
  //   const [cartQuant, setCartQuant] = useState(quantity);

  const addToCart = (works) => {
    // Check if the product already exists in the addedItems array
    console.log(
      works.title.split(" ").join("-") ===
        window.location.pathname.split("/").slice(-1)[0]
    );
    console.log(works.title.split(" ").join("-"));
    console.log(
      window.location.pathname.split("/").slice(-1)[0]
    );
    const prodCardIndex = cartItems.findIndex(
      (item) => item.title === works.title
    );

     if (!quant || quant < 1) {
       alert("Quantity must be at least 1."); 
       setQuant(1)
       return; // Exit the function if quant is less than 1 or empty
     }

    if (prodCardIndex !== -1) {
      // If the product exists, update its quantity
      const updatedAddedItems = [...cartItems];
      const totalQuantity = updatedAddedItems[prodCardIndex].quantity + quant;
      
      updatedAddedItems[prodCardIndex].quantity++;
      updatedAddedItems[prodCardIndex].totalPrice += works.price;
      setCartItems(updatedAddedItems);

        

      setTotalCart(Number((totalCart + parseFloat(works.price)).toFixed(2)));
      let tQuant = 1;
      setTotalItem(totalItem + tQuant++);
      const updateCart = (artcard) => {
        setTotalItem(Number(quant) + totalItem);
      };

      if (updatedAddedItems[prodCardIndex].quantity === works.stock) {
        alert('all stock in cart')
        return;
      }

      if (!artcard) {
        // If the product doesn't exist, add it to addedItems array
        const updatedAddedItems = [...cartItems];
        const updateCart = (artcard) => {
          setTotalItem((prev) => prev + Number(quant));
        };
      }
      else{

        updateCart();
       
              
       updatedAddedItems[prodCardIndex].totalPrice +=
            works.price * quant - works.price;
        updatedAddedItems[prodCardIndex].quantity += parseInt(quant) - 1;
        setTotalCart(Number((totalCart + parseFloat(works.price*quant)).toFixed(2)));
        
      }
    } else {
      if (artcard) {
          setCartItems((prevItems) => [
            ...prevItems,
            { ...works, quantity: quant, totalPrice: works.price * quant },
          ]);
          setTotalCart((...prevItems) =>
            Number(parseFloat(prevItems) + parseFloat(works.price * quant))
          );

          setTotalItem((...prevItems) =>
            Number(parseInt(prevItems) + parseInt(quant))
          );
        
        console.log(quant);
        console.log(typeof(quant))
      } else {
         setCartItems((prevItems) => [
          ...prevItems,
          { ...works, quantity: 1, totalPrice: works.price },
        ]);
        setTotalCart((...prevItems) =>
          Number((parseFloat(prevItems) + parseFloat(works.price)))
        );
        setTotalItem((...prevItems) => Number(parseInt(prevItems) + 1));

      }
    }
    setQuant(1);
    }
  ;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalCart,
        setTotalCart,
        totalItem,
        setTotalItem,
        addToCart,
        quant,
        setQuant,
        // cart,
        // setCart,
        // addedItems,
        // setAddedItems,
        // quantity,
        // setQuantity,
        // cartQuant,
        // setCartQuant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
