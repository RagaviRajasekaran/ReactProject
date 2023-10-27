import React, { createContext, useContext, useReducer } from 'react';

// Create the CartContext
const CartContext = createContext();

// Initial state for the cart
const initialState = {
  cartItems: [ {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "quantity": 1, 
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
},
{
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "quantity": 1, 
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
},
{
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "quantity": 1, 
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
},
{
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "quantity": 1, 
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
},
{
    "id": 5,
    "title": "Huawei P30",
    "quantity": 1, 
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
}], // Array to store cart items
};
const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
// Reducer function to handle actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          // Check if the product is already in the cart
          const existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
          if (existingIndex !== -1) {
            // If it exists, increase the quantity
            state.cartItems[existingIndex].quantity += 1;
            state.totalAmount = calculateTotalAmount(state.cartItems); // Update total amount
            return { ...state };
          } else {
            // If it doesn't exist, add it to the cart
            state.cartItems.push({ ...action.payload, quantity: 1 });
            state.totalAmount = calculateTotalAmount(state.cartItems); // Update total amount
            return { ...state };
          }
          case 'CLEAR_CART':
  state.cartItems = [];
  state.totalAmount = 0;
  return { ...state };
        case 'REMOVE_FROM_CART':
          // Remove the product from the cart
          const updatedCart = state.cartItems.filter((item) => item.id !== action.payload);
          state.cartItems = updatedCart;
          state.totalAmount = calculateTotalAmount(state.cartItems); // Update total amount
          return { ...state };
        case 'INCREMENT_QUANTITY':
          // Increment the quantity of a product
          const incIndex = state.cartItems.findIndex((item) => item.id === action.payload);
          state.cartItems[incIndex].quantity += 1;
          state.totalAmount = calculateTotalAmount(state.cartItems); // Update total amount
          return { ...state };
        case 'DECREMENT_QUANTITY':
          // Decrement the quantity of a product
          const decIndex = state.cartItems.findIndex((item) => item.id === action.payload);
          if (state.cartItems[decIndex].quantity > 0) {
            state.cartItems[decIndex].quantity -= 1;
            state.totalAmount = calculateTotalAmount(state.cartItems); // Update total amount
          }
          return { ...state };
        default:
          return state;
      }
    };

// CartProvider component to wrap the entire app
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
  );
}

// Custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}
