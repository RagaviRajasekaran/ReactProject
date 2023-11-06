
import './App.css';
import React, { useState } from "react";

import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CartPage from './CartPage';


function App() {
  return (
    
    <Router>
  
      
       
          <Routes>
           
            <Route path="/" element={<CartPage />} />
          </Routes>
        
 
    </Router>
  );
}

export default App;