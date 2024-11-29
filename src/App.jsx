import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from './components/Cart';
import Home from "./components/Home";
import products from './components/products';

function App() {
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, increment its qty
      updatedCart[existingItemIndex].qty += 1;
    } else {
      // If the item is not in the cart, add it with a qty of 1
      updatedCart.push({ ...product, qty: 1 });
    }

    setCart(updatedCart);
  };

  // Remove item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Update the cart directly
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  // Create the router with Home and Cart routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home products={products} cart={cart} addToCart={addToCart} updateCart={updateCart} />
    },
    {
      path: "/cart",  // Cart page route
      element: <Cart cart={cart} removeFromCart={removeFromCart} />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
