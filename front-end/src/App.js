import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import PrivateRoute from './components/PrivateRouter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
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

// import React, { useContext } from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import RegisterContext from './contexts/RegisterContext/RegisterContext';
// import CustomerProducts from './pages/CustomerProducts';
// import Login from './pages/Login';
// import Register from './pages/Register';

// function App() {
//   const { registerInfo } = useContext(RegisterContext);
//   return (
//     <BrowserRouter>
//       <Routes>
//         { registerInfo === null
//           ? (
//             <>
//               <Route path="/" element={ <Navigate to="/login" /> } />
//               <Route path="/login" element={ <Login /> } />
//               <Route path="/register" element={ <Register /> } />
//               <Route path="*" element={ <Navigate to="/login" /> } />
//             </>)
//           : (
//             <>
//               <Route path="*" element={ <Navigate to="/customer/products" /> } />
//               <Route path="/customer/products" element={ <CustomerProducts /> } />
//             </>
//           )}
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
