import React from "react";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
const Aboutus=()=>
{
    return(
        <div>
            <div class="backimg min-vh-100 d-flex align-items-center justify-content-center pt-5">
                <div class="row form-box text-center d-flex justify-content-center">
                    <div class="col-sm-9">
                        <h1>ARVI Solutions</h1>
                        <p>Meet the dedicated team at ARVI,revolutionizing the way we farm with innovative,beautiful and sustainable solutions for the home</p>
                        <img src="img1.jpg" width="200" height="200" class="rounded-circle" alt=""/>
                        <h3 class="pt-3"><i>RUKIYA</i></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Aboutus;