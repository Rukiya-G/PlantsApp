import React,{useState} from "react";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import "./style.css";
import Validation from "./LoginValidation";
const Login=()=>
{
    const [values,setvalues]=useState({
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
                        <h2 class="text-center">Login</h2>
                        <div class="row">
                            <label for="email" class="col-sm-5 col-form-label"><big>Email</big></label>
                            <div class="col-sm-15">
                                <input type="text" id="email" name="email" class="form-control" placeholder="Enter username/email"  onChange={handleInput}/>
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                            </div>
                        </div>
                        <div class="row">
                            <label for="password" class="col-sm-5 col-form-label"><big>Password</big></label>
                            <div class="col-sm-15">
                                <input type="password" id="password" name="password" class="form-control mb-3" placeholder="Enter password" onChange={handleInput}/ >
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                            </div>
                        </div>
                        <button type="submit" class="btn btn-info d-grid gap-2 col-6 mx-auto mb-2 mt-3"><NavLink to="/home">Login</NavLink></button>
                        <p>Don't have an account ? <NavLink to="/signup">Signup</NavLink></p>
                    </form>      
                </div>
            </div>
        );
};
export default Login;