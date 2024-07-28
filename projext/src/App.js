import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Buy from './Buy';
import Rent from './Rent';
import Swap from './Swap';
import Adminbuy from './Adminbuy';
import Adminrent from './Adminrent';
import Adminswap from './Adminswap';
import { ProductProvider } from './ProductContext';
import Adminlogin from './Adminlogin';
import { CartProvider } from './CartContext';
import { CssBaseline } from '@mui/material';
import CartPage from './CartPage';
import GlobalStyle from './GlobalStyle'; // Import the GlobalStyle component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ProductProvider>
      <CartProvider>
        <CssBaseline />
        {/* Use the GlobalStyle component here */}
        <Router>
          <Routes>
            <Route path="/swap" element={<Swap />} />
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminbuy" element={<Adminbuy />} />
            <Route path="/adminrent" element={<Adminrent />} />
            <Route path="/adminswap" element={<Adminswap />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
