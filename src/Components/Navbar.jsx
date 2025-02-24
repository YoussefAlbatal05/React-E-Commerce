
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";



const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const cartCount = cartItems.reduce((total , item) => total + item.quantity , 0)

    return(
        <div>
           
           
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">

 <div className="container">

  <NavLink className="navbar-brand fw-bold fs-3 px-3 py-3" to="/">React E-commerce</NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="mynavbar">

    <ul className="navbar-nav m-auto text-center my-2">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>


   <div className="buttons text-center">

     <NavLink className="btn-outline-dark btn m-2 border-2" to="/login"> <FontAwesomeIcon icon={faRightToBracket} /> Login</NavLink>
     <NavLink className="btn-outline-dark btn m-2 border-2" to="/register"> <FontAwesomeIcon icon={faUserPlus} /> Register</NavLink>
     <NavLink className="btn-outline-dark btn m-2 border-2" to="/cart"><FontAwesomeIcon icon={faCartShopping} /> Cart <span className="cart-counter">({cartCount})</span> </NavLink>

   </div>

   </div>

  </div>

</nav>

    </div>
 )

}

export default Navbar