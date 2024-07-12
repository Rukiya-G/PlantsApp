import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { Link } from "react-router-dom";
const Plantsproducts=()=>{
    return(
        <div>
            <div className="pt-5">
                <h3 className="text-center pt-5">Let's pick your plant </h3>
                <div className="row min-vh-100 d-flex justify-content-center align-items-center">
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                        <img src="indoorplants\snakeplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Snake Plant (Sansevieria trifasciata)</h6>
                        <h4>₹159</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                    <img src="indoorplants\aloeveraplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Aloe Vera (Aloe barbadensis miller)</h6>
                        <h4>₹259</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                    <img src="indoorplants\peacelily.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Peace Lily (Spathiphyllum)</h6>
                        <h4>₹300</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                    <img src="indoorplants\pothosplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Pothos (Epipremnum aureum)</h6>
                        <h4>₹120</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2 ">
                    <img src="indoorplants\rubberplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Rubber Plant (Ficus elastica)</h6>
                        <h4>₹180</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                    <img src="indoorplants\spiderplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Spider Plant (Chlorophytum comosum)</h6>
                        <h4>₹250</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                    <img src="indoorplants\zzplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">ZZ Plant (Zamioculcas zamiifolia)</h6>
                        <h4>₹170</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                         <img src="indoorplants\jadeplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Jade Plant (Crassula ovata)</h6>
                        <h4>₹450</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                    <div className="col-sm-3 text-center form-box m-2 p-2">
                        <img src="indoorplants\watermelon_peperomiaplant.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h6 className="text-primary">Watermelon Peperomia(Peperomia argyreia)</h6>
                        <h4>₹270</h4>
                        <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Plantsproducts;