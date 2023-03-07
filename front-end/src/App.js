import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import PrivateRoute from './components/PrivateRouter';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route
          path="/customer/products"
          element={
            <PrivateRoute>
              <CustomerProducts />
              {' '}
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
