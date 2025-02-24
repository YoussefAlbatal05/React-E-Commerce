
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import Product from "./Pages/Product";
import ProductDetails from './Pages/ProductDetails';
import CheckOut from './Pages/CheckOut';
import { Toaster } from 'react-hot-toast';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {

    return(
  <div>
    <Toaster/>
    <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Product/>} />
                <Route path="/product/:id" element={<ProductDetails/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<CheckOut/>} />

            </Routes>

    </BrowserRouter>
   </div>
    )

}

export default App