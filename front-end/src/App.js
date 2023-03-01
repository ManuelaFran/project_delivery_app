import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
