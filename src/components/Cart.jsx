import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  // Make sure the CSS file is imported

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0); // Calculate total price

  return (
    <div className="container cart-container">
      <h2>Shopping Cart</h2>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="row cart-item" key={item.id}>
              <div className="col-md-8">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Qty: {item.qty}</p>
                <p>${(item.price * item.qty).toFixed(2)}</p>
              </div>
              <div className="col-md-4">
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
          <hr />
          <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}

      {/* Link to Home */}
      <Link to="/" className="btn btn-secondary">Continue Shopping</Link>
    </div>
  );
}

export default Cart;
