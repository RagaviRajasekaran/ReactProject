import React from 'react';
import './App.css';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { state, dispatch } = useCart();

  const firstCartItem = state.cartItems[0]; // Access the first item in the cart

  const handleIncrement = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: itemId });
  };

  const handleDecrement = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: itemId });
  };

  const handleAddToCart = (item) => {
    dispatch({ type: 'CLEAR_CART' }); // Clear the cart
    dispatch({ type: 'ADD_TO_CART', payload: item }); // Add the selected product
    // No navigation code here
  };

  return (
    <div className="container bg-light">
      <h2 className="text-center">Your Cart</h2>
      
      <div className="row d-flex justify-content-center">
        {firstCartItem ? ( // Check if there is a firstCartItem
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center">
              <div className="card-body">
                <img src={firstCartItem.thumbnail} width="150" height="150" alt="" id="image" />
                <h3>{firstCartItem.title}</h3>
                <p>{firstCartItem.description}</p>
                <p>Price: ${firstCartItem.price}</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="minus-button" onClick={() => handleDecrement(firstCartItem.id)}>
                    <i className="fa fa-minus"></i>
                  </button>
                  <input
                    type="text"
                    name="qty"
                    className="form-control"
                    value={firstCartItem.quantity}
                    disabled
                  />
                  <button className="plus-button" onClick={() => handleIncrement(firstCartItem.id)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
                <p>Subtotal: ${firstCartItem.price * firstCartItem.quantity}</p>
                <button
                  className="btn-light mt-3 border border-primary"
                  onClick={() => handleAddToCart(firstCartItem)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No product in the cart.</p>
        )}
      </div>
    </div>
  );
}

export default CartPage;
