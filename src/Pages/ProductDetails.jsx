import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import Marquee from "react-fast-marquee";
//import { increment , decrement , reset } from "./Cart";
import { useDispatch } from "react-redux";
import { addToCart } from "../Pages/CartSlice";

const ProductDetails = () => {
    const { id } = useParams()
    const { items } = useSelector((state) => state.products) // Get all products from Redux store , The useSelector hook allows you to access the state stored in Redux. ,  items is an array that holds all the products fetched from the API in ProdutSlice.js
    const dispatch = useDispatch()
    

    
    const product = items.find((p) => p.id === Number(id)) // here we are getting the product id which we got from the useParams() ,  id is coming from React Router (useParams())  which returns URL parameters as strings. so we used Number to convert it to numbers
    const relatedProducts = items.filter((a) => a.category === product.category && a.id !== product.id) 


    if(!product) {  // if product id not found
        return(
            <h2 className="text-center mt-5">Product not found</h2>
        )
    }

    return(
    <div>
        <Navbar/>
        <div className="container py-4">
            <div className="d-flex row justify-content-center align-items-center">

                  <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center p-5">
                       <img src={product.image} alt={product.title} style={{ height : "600px" , objectFit : "contain"  }} />
                  </div>

                 <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="content d-flex flex-column">
                            <h3 className="fw-bold text-uppercase">{product.category}</h3>
                            <h2 className="fw-light">{product.title}</h2>
                            <h5>Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</h5>
                            <h2>{product.price}</h2>
                            <h6 className="fw-light">{product.description}</h6>
                            <div className="py-3">
                                <button className="btn btn-outline-dark border-2 me-2" onClick={() => { dispatch(addToCart(product))}}>Add To Cart</button>
                                <button className="btn btn-dark">Go To Cart</button>
                            </div>
                    </div>
                 </div>

            </div>
        </div>

    <div className="container mt-5 pt-3">
                <h3 className="text-start fw-bold">You May Also Like</h3>
        <Marquee speed={50} pauseOnHover={true} autoFill={true}>
                    <div className="d-flex mt-5">
                        {relatedProducts.map((item) => (
                                <div className="card me-5">
                                    <div className="card-body d-flex flex-column">
                                         <img src={item.image} alt={item.title} className="card-image-top" style={{height:"350px"}} />
                                             <h5 className="text-center fw-bold mt-3">{item.title.length > 13 ? item.title.slice( 0 , 13 ) + "..." : item.title }</h5>
                                                <div className="py-2 text-center">
                                                    <button className="btn btn-dark me-2">Add To Cart</button>
                                                    <button className="btn btn-dark">Go To Cart</button>
                                                </div>
                                    </div>
                                </div>
                        ) ) }

                    </div> 

        </Marquee>

    </div>

 
    </div> 
    )
}

export default ProductDetails

