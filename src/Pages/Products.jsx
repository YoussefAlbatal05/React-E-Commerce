import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/ProductSlice";
import CategoryFilter from "../Redux/CategoryFilter";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Pages/CartSlice";
import Navbar from "../Components/Navbar";
import toast, { Toaster } from "react-hot-toast";


const Product = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.products);
    const [category, setCategory] = useState("all");
    const navigate = useNavigate()

    const loadProduct = () => {
        const loadProductFromStorage = localStorage.getItem("cart")
        return loadProductFromStorage ? JSON.parse(loadProductFromStorage) : []
    }


    useEffect(() => {  // here we dispatches fetchProducts() from ProductSlice.js
        dispatch(fetchProducts());
    }, [dispatch]);

    // Filter products by selected category
    const filteredProducts =
        category === "all" ? items : items.filter((product) => product.category === category);

    return (
         
        <div>

            <Navbar/>
       
            <div className="container my-4">

            <h1 className="text-center pt-3">Latest Products</h1>
            <hr></hr>
            <CategoryFilter setCategory={setCategory} selectedCategory={category} className="text-center" />
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error fetching products</p>}


            <div className="row" >
                {filteredProducts.map((product) => (

                <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 p-3">

                 <div className="card h-100 shadow-sm my-3 overflow-visible">
                        
                     <img src={product.image} alt={product.title} style={{ height:"350px" ,  objectFit: "contain"  }} className="card-img-top" />

                     <div className="card-body text-center">
                        <h4 className="card-title"> {product.title.length > 13 ? product.title.slice(0 , 13) + "..." : product.title }  </h4>
                        <p className="card-text">Category: {product.category}</p>
                        <hr className="w-100"/>
                        <p className="card-text">Price: ${product.price}</p>
                        <hr></hr>
                        <button className="btn btn-dark mx-2 border-2" onClick={() => navigate(`/product/${product.id}`)}>Buy Now</button> 
                        <button className="btn btn-dark border-2" onClick={ () => { dispatch(addToCart(product)) ; toast.success("Product added to cart! 🛒") } }>Add To Cart</button>
                     </div>

                 </div>

                </div>

                ))}

            </div>
           </div>
        </div>
             

    );
};

export default Product;