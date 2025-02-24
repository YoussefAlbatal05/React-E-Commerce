
import React from "react";
import { useDispatch , useSelector } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeFromCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems) // state → Represents the entire Redux store state (store.js) , state.cart → it was named cart in cartSlice Accesses the cart slice (which was defined in cartSlice.js), state.cart.cartItems → cartItems is the array in CartSlice that contain the products (initial state).
    const summaryPrice = cartItems.reduce((acc , item) => acc + (item.price * item.quantity) , 0)
    const totalPrice = summaryPrice + 30
    const counterInOrderSummary = cartItems.reduce((acc , item) => acc + item.quantity , 0 )
    const navigate = useNavigate()

    return(
        <div className="container d-flex mt-5">

            <div className="d-flex row flex-column col-xl-7 col-lg-8 col-sm-6 col-md-5 justify-content-center align-items-center">
            {
                cartItems.length === 0 ? ( <h4 className="text-center mt-4">Cart is empty</h4> ) : ( cartItems.map((item) => (
                <div key={item.id} className="d-flex row justify-content-between align-items-center border border-2 border-dark p-4 mb-3">
                    <div className="d-flex  col-lg-2 col-md-12 col-sm-12">
                    <img src={item.image} alt={item.title} style={{ width: "100px" }} />
                    </div>
                    <div className="d-flex col-lg-3 col-sm-12">
                    <h5>{item.title.length > 20 ? item.title.slice(0 , 20) + " ..." : item.title }</h5>
                    </div>
                    <div className="d-flex col-lg-2 col-sm-6">
                    <h4 className="fw-bold">${item.price}</h4>
                    </div>
                    <div className="d-flex col-lg-2  col-sm-6">
                    <h4 className="fw-bold cursor-pointer mx-1 mt-1  d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }} onClick={() => dispatch(increaseQuantity(item.id))}>  +  </h4> <h4 className="fw-bold mt-1" style={{display : "inline"}}>  ({item.quantity})  </h4>
                    <h4 className="fw-bold cursor-pointer mx-1 mt-1 justify-content-center align-items-center" style={{ cursor: "pointer" }} onClick={() => dispatch(decreaseQuantity(item.id))}>   -  </h4>
                    </div>
                    <div className="d-flex col-lg-2  col-sm-12">
                    <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                    </button>
                    </div>
                    </div>
                ) ) )
            }
             </div>

            <div className="d-flex flex-column col-xl-5 col-lg-4 col-sm-6 col-md-6 mx-5">
                <div className="priceSummary">
                        <div className="card border border-2">
                             <h2 className="card-text fw-bold p-3">Order Summary </h2> 
                             <hr className="w-100 my-0"/>
                             <div className="card-body text-center">
                             <h4 className="card-text text-start d-flex justify-content-between mb-3 my-2"> <span >Products ({counterInOrderSummary}) </span>  <span>  $ {summaryPrice.toFixed(1)} </span> </h4>
                             <h4 className="card-text mb-3 d-flex justify-content-between"><span>Shipping</span>  <span>$ 30</span></h4>              
                             <h4  className="card-text text-start d-flex justify-content-between"> <span className="text-nowrap">Total Amount</span>  <span> $ {totalPrice.toFixed(1)} </span> </h4>
                             <button className="btn btn-dark w-50 mt-3 p-2 fs-4 rounded-3" onClick={() => navigate("/checkout")} >Go To Checkout</button>
                             </div>
                        </div>
                </div>
             </div>

        </div>
    )
}

export default Cart