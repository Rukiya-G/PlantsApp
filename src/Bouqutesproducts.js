import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { Link } from "react-router-dom";
const Bouqutesproducts=()=>{
    return(
        <div>
            <div className="pt-5">
                <h3 className="text-center pt-5">Let's pick your Bouquets </h3>
                <div class="row min-vh-100 d-flex justify-content-center align-items-center">
                    <div class="col-sm-3 m-2 p-2 form-box text-center">
                        
                                <img src="bouqutes/bloomingbouquet.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Blooming Bouquet</h6>
                               <h4>₹159</h4>
                               <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                           
                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes/bridalflowerbouquet.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Bridalflower bouquet</h6>
                                <h4>₹209</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                            
                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes\lilacflower.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Lilacflower</h6>
                                <h4>₹199</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>

                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes\natural-dried-floral-bouquet.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Dried-floral-Bouquet</h6>
                                <h4>₹459</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                            
                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes\pink&redroses.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Pink&Red Roses</h6>
                                <h4>₹359</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                        
                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes\pinkroses.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Pink roses</h6>
                                <h4>₹159</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                            
                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes\redroses.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Red Roses</h6>
                                <h4>₹200</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                           
                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes\whiteroses.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Whiteroses</h6>
                                <h4>₹309</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                           
                    </div>
                    <div class="col-sm-3 form-box m-2 p-2 text-center">
                        
                                <img src="bouqutes\lilacflower.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                                <h6 className="text-primary">Lilacflower</h6>
                                <h4>₹180</h4>
                                <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                           
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Bouqutesproducts;