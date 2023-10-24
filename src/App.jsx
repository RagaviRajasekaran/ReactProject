import React, { useState } from "react";

import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Cart from './components/Cart'; 
import Home from "./components/Home";
import products from './components/products';


function App() {
  const [cart, setCart] = useState([]);
  
  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home products={products} cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
    },
    {
      path: "/Cart", // Use lowercase 'cart'
      element: <Cart cart={cart} removeFromCart={removeFromCart} />
    }
  ]);
  
  return(
    <RouterProvider router={router} />
  
  )}

export default App;
