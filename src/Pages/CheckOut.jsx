import React from "react";
import { useDispatch , useSelector } from "react-redux"


const CheckOut = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const summaryPrice = cartItems.reduce((acc , item) => acc + (item.price * item.quantity) , 0);
    const totalPrice = summaryPrice + 30;
    const counterInOrderSummary = cartItems.reduce((acc , item) => acc + item.quantity , 0 );

    return(
        <div className="container mt-4">

          <div className="row flex-column flex-md-row">  

            <div className="col-12 col-md-7 mb-4 border border-2 rounded border-gray mx-auto" style={{ maxWidth: "95%" }}>
                 
                 <h2 className="mb-4 mt-3 card-text fw-bold">Billing-Address</h2>

                 <hr className="w-100"/>

                <div>
                    <form>
                      <div className="d-flex flex-column">
                       <div className="row mb-1 mt-3">
                           <div className="col">
                             <label class="form-label">First Name</label>
                             <input type="text" className="form-control"  name="email"/>
                          </div>
                      <div className="col">
                           <label class="form-label">Last Name</label>
                           <input type="password" className="form-control" name="pswd"/>
                      </div>
                        </div>


                        <div class="mb-3 mt-3">
                          <label for="email" class="form-label">Email</label>
                          <input type="email" class="form-control" id="email" placeholder="you@example.com" name="email"/>
                        </div>
                        <div class="mb-3 mt-3">
                          <label for="email" class="form-label">Address</label>
                          <input type="email" class="form-control" id="email" placeholder="1234 Main Street" name="email"/>
                        </div>
                        <div class="mb-3 mt-3">
                          <label for="email" class="form-label">Address 2 (optional)</label>
                          <input type="email" class="form-control" id="email" placeholder="Apartement or Suite" name="email"/>
                        </div>


                      <div className="row mb-3 mt-3">
                           <div className="col">
                            <label class="form-label">Country</label>
                            <select className="form-select dropdown" name="country">
                             <option value="">Select Country</option>
                             <option value="us">United States</option>
                             <option value="uk">United Kingdom</option>
                             <option value="ca">Canada</option>
                             <option value="au">Australia</option>
                             </select> 
                            </div>
                      <div className="col">
                           <label class="form-label">State</label>
                           <select className="form-select" name="country">
                             <option value="">Select Country</option>
                             <option value="us">United States</option>
                             <option value="uk">United Kingdom</option>
                             <option value="ca">Canada</option>
                             <option value="au">Australia</option>
                            </select> 
                      </div>
                      <div className="col">
                           <label class="form-label">Zip</label>
                            <select className="form-select" name="country">
                             <option value="">Select Country</option>
                             <option value="us">United States</option>
                             <option value="uk">United Kingdom</option>
                             <option value="ca">Canada</option>
                             <option value="au">Australia</option>
                             </select> 
                      </div>
                        </div>


                        <hr className="w-100"/>
                        <h4>Payment</h4>


                      <div className="row mb-1 mt-3">
                           <div className="col">
                             <label class="form-label">Name On Card</label>
                             <input type="text" className="form-control" placeholder="Full name as displayed on card"  name="email"/>
                          </div>
                      <div className="col">
                           <label class="form-label">Credit Card Number</label>
                           <input type="password" className="form-control" name="pswd"/>
                      </div>
                     </div>

                    <div className="d-flex mb-1 mt-3 gap-3">
                      <div className="text-start">
                         <label className="form-label">Expiration</label>
                         <input type="text" className="form-control" name="number"/>
                      </div>
                      <div>
                       <label className="form-label">CVV</label>
                        <input type="password" className="form-control" name="pswd"/>
                      </div> 
                    </div>


                    <hr className="w-100"/>

                     
                    <button className="btn w-100 btn-primary p-2 mb-4 mt-3">Continue to checkout</button>


                      </div>
                   </form>
                </div>
             </div>


             <div className="col-12 col-md-5 mb-3">
                   <div className="card border border-2">
                        <h2 className="card-text fw-bold p-3">Order Summary</h2>
                        <hr className="w-100 my-0" />
                        <div className="card-body text-center">
                            <h4 className="card-text text-start d-flex justify-content-between mb-3 my-2">
                                <span>Products ({counterInOrderSummary})</span> <span>$ {summaryPrice.toFixed(1)}</span>
                            </h4>
                            <h4 className="card-text mb-3 d-flex justify-content-between">
                                <span>Shipping</span> <span>$30</span>
                            </h4>
                            <h4 className="card-text text-start d-flex justify-content-between">
                                <span className="text-nowrap">Total Amount</span> <span>$ {totalPrice.toFixed(1)}</span>
                            </h4>

                        </div>
                    </div>
             </div>

          </div>
            
        </div>
    )

}

export default CheckOut