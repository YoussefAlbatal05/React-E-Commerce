import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/App.css"
import Navbar from "../Components/Navbar";

const About = () => {

    const navigate = useNavigate()

    return(
        <div>
            <Navbar/>
        <div className="container text-center mt-4 overflow-hidden">
            <h1 className="text-center">About Us</h1>
            <hr className="border border-1 border-secondary"></hr>
            <p className="fs-4 text-center mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum aut quisquam sed autem dolores cumque repellendus inventore saepe labore ea tempore, ad earum molestiae enim aspernatur amet. Laboriosam, dolor quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae nostrum fugiat dolor aliquam optio itaque! Nemo, necessitatibus consequuntur hic minus quisquam officia vitae esse adipisci velit amet itaque impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam, repellendus necessitatibus, amet illum consequuntur, ut animi numquam incidunt id tempora iure saepe nam totam ea tenetur deleniti cumque aut.</p>

            <h1 className="text-center mt-5 p-2">Our Products</h1>
            <div className="cards-parent row g-5 p-3 mb-4 d-flex justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12 mx-auto d-flex justify-content-center">
                <div className="card shadow-sm about-card w-100" style={{cursor : "pointer"}} onClick={() => navigate("/products?category=men's clothing")}>
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                    <h4 className="text-center card-text">Men's Clothing</h4>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card shadow-sm about-card w-100" style={{cursor : "pointer"}} onClick={() => navigate("/products?category=women's clothing")}>
                    <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                    <h4 className="text-center card-text">Women's Clothing</h4>
                    </div>
                </div>  
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">      
                <div className="card shadow-sm about-card w-100" style={{cursor : "pointer"}} onClick={() => navigate("/products?category=jewelery")}>
                    <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                    <h4 className="text-center card-text">Jewelery</h4>
                    </div>
                </div> 
                </div>  
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">            
                 <div className="card shadow-sm about-card w-100" style={{cursor : "pointer"}} onClick={() => navigate("/products?category=electronics")}>
                    <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                    <h4 className="text-center card-text">Electronics</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default About