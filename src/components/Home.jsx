import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home({ products, cart, addToCart, updateCart }) {
  const [cartCount, setCartCount] = useState(0);

  // Update cart count whenever the cart changes
  useEffect(() => {
    setCartCount(cart.reduce((count, item) => count + item.qty, 0));
  }, [cart]);

  const removeFromCart = (productId) => {
    const filteredCart = cart.filter((item) => item.id !== productId);
    updateCart(filteredCart); // Lift the state up to parent
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        item.qty += 1;
      }
      return item;
    });
    updateCart(updatedCart); // Lift the state up to parent
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.qty > 1) {
        item.qty -= 1;
      }
      return item;
    });
    updateCart(updatedCart); // Lift the state up to parent
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand text-dark" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Home</a>
              </li>
            </ul>
            <Link to="/cart" className="btn btn-outline-primary">
              <i className="fa fa-shopping-cart p-1"></i>
              Cart<span className="badge bg-secondary ms-2">{cartCount}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="banner p-5">
        <div className="text-center text-white pt-5 fs-1">
          <h1>Shop in Style</h1>
          <p>Enjoy Shopping with Exclusive Deals</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container-fluid p-5">
        <div className="row">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card text-center" style={{ height: "450px" }}>
                <div className="card-body">
                  <img src={product.image} alt={product.name} width={150} height={200} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="text-warning fw-bold">{product.rating}</p>
                  <p>${product.price}</p>
                  {cart.find((item) => item.id === product.id) ? (
                    <div className="prdct-qty-container">
                      <button className="btn btn-sm btn-secondary" onClick={() => decreaseQuantity(product.id)}>
                        <i className="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control d-inline text-center mx-2"
                        style={{ width: "50px" }}
                        value={cart.find((item) => item.id === product.id).qty}
                        readOnly
                      />
                      <button className="btn btn-sm btn-secondary" onClick={() => increaseQuantity(product.id)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
