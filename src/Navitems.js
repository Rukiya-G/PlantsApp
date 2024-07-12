import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
const Navitems=()=>{
        return(
            <> 
            <header className="header">
            <nav className="bd-highlight">
              <div className="nav-menu d-flex justify-content-end">
                <h3 className="flex-grow-1 p-4 pt-4 pb-2 text-white ">ARVI Solutions</h3>
                <NavLink to="/home" className="nav-link m-3 p-2">Home</NavLink>
                <NavLink to="/" className="nav-link m-3 p-2">Login</NavLink>
                <NavLink to="/signup" className="nav-link m-3 p-2">Signup</NavLink>
                <NavLink to="/profile" className="nav-link m-3 p-2">Profile</NavLink>
                <NavLink to="/aboutus" className="nav-link m-3 p-2">AboutUs</NavLink>
              </div>
            </nav>
            </header>
            <Outlet/>
            </>
        );
};
export default Navitems;