
import './App.css';
import React, { useState } from "react";

import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';


function App() {
  return (
    
    <Router>
      <CartProvider>
      
       
          <Routes>
           
            <Route path="/" element={<CartPage />} />
          </Routes>
        
      </CartProvider>
    </Router>
  );
}

export default App;
