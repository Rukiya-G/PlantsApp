import React,{useState} from "react";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import Validation from "./SignupValidation";
import { NavLink } from "react-router-dom";
const Signup=()=>
{
  const [values,setvalues]=useState({
    name:'',
    email:'',
    password:''
})
const [errors,setErrors]=useState({})
function handleInput(event){
    setvalues(pre=>({...pre,[event.target.name]:[event.target.value]}))
}
function handleSubmit(event){
    event.preventDefault();
    setErrors(Validation(values));
}
    return(
        <div>
            <div class="backimg min-vh-100 d-flex justify-content-center align-items-center pt-5">
        <form class="form-box p-3 mt-5 mb-5 pt-4" onSubmit={handleSubmit}>
            <h2 class="text-center">Signup</h2>
          <div class="row">
            <label class="col-sm-3 col-form-label"><big>Username</big></label>
            <div class="col-sm-15">
              <input type="text" id="name" name="name" class="form-control" placeholder="Enter Username" onChange={handleInput}/>
              {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>
          </div>
          <div class="row">
            <label class="col-sm-3 col-form-label"><big>Email Id</big></label>
            <div class="col-sm-15">
              <input type="text" class="form-control" id="email" name="email" placeholder="Enter Email Id" onChange={handleInput}/ >
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
          </div>
          <div class="row">
            <label class="col-sm col-form-label"><big>Create Password</big></label>
            <div class="col-sm-15">
              <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" onChange={handleInput}/>
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
          </div>
          <button type="submit" class="btn btn-info d-grid gap-2 col-6 mx-auto mb-2 mt-3"><NavLink to="/">Create Account</NavLink></button>
          <p>Already have an account ? <NavLink to="/">Login</NavLink></p>
        </form>      
  </div>
        </div>
    );
};
export default Signup;