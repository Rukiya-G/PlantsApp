import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { NavLink } from "react-router-dom";
const Home=()=>{
    return(
      <div className="backimg pt-5">
        <div class="pt-5">
        <div class="text-center text-uppercase pt-5 pb-3">
            <h1 className="welcome">Welcome to Super Shopping</h1>
        </div>
       
        <div class="d-flex justify-content-center">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img1.jpg"  width="700" height="250" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="img2.jpg"   width="700" height="250" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="img3.jpg"   width="700" height="250" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="img4.jpg"  width="700" height="250" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="img5.jpg"   width="700" height="320" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
  </div>
       
  {/* <!-- get started --> */}
  <div class="row d-flex justify-content-center mt-3 pt-5">
    <div class="col-sm-5 p-3 m-3 text-center form-box">
      <img src="img6.jpg" width="200" height="200" class="rounded-circle" alt=""/>
      <h3>Indoor Plants</h3>
      <NavLink to="/plantsshop" className="fs-4 text-white bg-primary rounded p-1">Show Now</NavLink>
    </div>
    <div class="col-sm-5 p-3 text-center m-3 form-box">
      <img src="img7.jpg" width="200" height="200" class="rounded-circle" alt=""/>
      <h3>Flower Bouquets</h3>
      <NavLink to="/bouquetsshop" className="fs-4 text-white bg-primary rounded p-1">Show Now</NavLink>
    </div>
    <div class="col-sm-6 mt-4">
      <h3 className="typewriter">Happiness Is Watching Your Plants Grow!!!</h3>
      <h2 className="pt-4 text-primary"><i>Contact Us:</i></h2>
      <p>Moblie Number:1234567890</p>
      <p>Email:arvi@gmail.in</p>
      <p>Location:Bangalore</p>
    </div>
    <div class="col-sm-4 mb-4">
      <img src="img8.jpg" width="400" height="400" alt=""/>
    </div>
   </div>
  </div>
      </div>
        );
};
export default Home;