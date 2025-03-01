import React from "react";
import Navbar from "../Components/Navbar";

const Contact = () => {

return(
    <div>
        <Navbar/>
        <div className="container mt-5">
            <h1 className="text-center">Contact Us</h1>
            <hr></hr>

              
            <div className="mt-4">

               <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
                   <label for="Name" className="form-label">Name</label>
                   <input type="email" class="form-control" id="Name" placeholder="Enter Your Name"/>
                  </div>

                <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <div class="form my-3">
                   <label for="Name" className="form-label">Email</label>
                   <input type="email" class="form-control" id="Name" placeholder="Name@example.com"/>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <div class="form my-3">
                   <label for="Name" className="form-label">Message</label>
                   <textarea type="email" class="form-control" id="Name" rows={5} placeholder="Enter Your Message"/>
                  </div>
                </div>

                <div className="text-center">
                  <div class="form my-3">
                   <button className="text-center align-items-center justify-content-center btn btn-secondary mt-3 text-center px-3">Send</button>
                  </div>
                </div>
              
            </div>


            </div>
        </div>
)

}

export default Contact