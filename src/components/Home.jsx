import "../App.css";
import React, { useState } from "react";
import products from "./products";
import { Link } from "react-router-dom";


function Home({product}) {
    const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
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
    setCartCount(cartCount + 1); // Increase cart qty
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);

    // Recalculate the cart count based on the updated cart
    const updatedCartCount = updatedCart.reduce((count, item) => count + item.qty, 0);

    setCart(updatedCart);
    setCartCount(updatedCartCount); // Decrease cart quantity
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        item.qty += 1;
      }
      return item;
    });

    setCart(updatedCart);
    setCartCount(cartCount + 1); // Increase cart quantity
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          // If the quantity reaches 0, remove the item from the cart
          return null; // Return null to filter out this item
        }
      }
      return item;
    });
  
    // Remove any null items (items with quantity 0) from the cart
    const filteredCart = updatedCart.filter((item) => item !== null);
  
    setCart(filteredCart);
  
    // Recalculate the cart count based on the updated cart
    const updatedCartCount = filteredCart.reduce((count, item) => count + item.qty, 0);
    setCartCount(updatedCartCount);
  };
  return (
    <div>
   <nav className="navbar navbar-expand-sm bg-light">
  <div className="container ">
    <a className="navbar-brand text-dark" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item ">
          <a className="nav-link text-dark" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">All Products</a></li>
            <li><a className="dropdown-item" href="#">Popular Items</a></li>
           
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
     
      <Link to='/Cart' type="button">
  <i className="fa fa-shopping-cart p-1"></i>Cart<span className="badge badge-light text-dark">{`+${cartCount}`}</span>
</Link>

 </div>
  </div>
</nav>

<div className="container-fluid banner" >
<div className="hero-text  fw-bolder ">
          <h1>Shop in Style</h1>
          <p>Enjoy Shopping</p>
        </div>

        
</div>

<div className="container">
    <div className="row">
    <div className="container p-5  ">
        <div className="row">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card text-center" style={{height:'450px'}}>
                <div className="card-body">
                <img src={product.image} alt={product.name} height={200} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            <p className="text-warning fw-bold">{product.rating}</p>
            <p>${product.price}</p>
            {cart.find((item) => item.id === product.id) ? (
                <div className="prdct-qty-container">
                  <button onClick={() => decreaseQuantity(product.id)}>
                    <i className="fa fa-minus"></i>
                  </button>
                  <input type="text" name="qty" className="qty-input-box" value={`${cartCount}`} disabled />
                  <button onClick={() => increaseQuantity(product.id)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
        
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</div>


      

    </div>
  );
}

export default Home;
