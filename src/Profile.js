import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
const Profile=()=>
{
    const validateForm=()=> {
        let firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const moblie = document.getElementById("moblie").value;
        const dob = document.getElementById("dob").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zip = document.getElementById("zip").value;
        const firstnameError = document.getElementById("firstname-error");
        const lastnameError = document.getElementById("lastname-error");
        const moblieError = document.getElementById("moblie-error");
        const dobError = document.getElementById("dob-error");
        const cityError = document.getElementById("city-error");
        const stateError = document.getElementById("state-error");
        const zipError = document.getElementById("zip-error");
        firstnameError.textContent = "";
        lastnameError.textContent="";
        moblieError.textContent = "";
        dobError.textContent = "";
        cityError.textContent = "";
        stateError.textContent = "";
        zipError.textContent = "";
        let isValid = true;
        if (firstname === "" || /\d/.test(firstname)) {
            firstnameError.textContent ="Please enter your first name properly.";
            isValid = false;
        }
        if (lastname === "" || /\d/.test(lastname)) {
            lastnameError.textContent ="Please enter your last name properly.";
            isValid = false;
        }
        if (moblie === ""||isNaN(moblie)||moblie.length!==10) {
             moblieError.textContent ="Please enter valid number.";
            isValid = false;
        }
        if (dob === "") {
            dobError.textContent ="Please enter valid date.";
           isValid = false;
       }
       if (city === "") {
          cityError.textContent ="Please enter valid city.";
          isValid = false;
       }
       if (state === "") {
           stateError.textContent ="Please select your state.";
           isValid = false;
        }
       if (zip === ""||isNaN(zip)) {
            zipError.textContent ="Please enter valid number.";
            isValid = false;
        }
        return isValid;
    };
    
        return(
            <div className="backimg">
                <div className="min-vh-100 d-flex justify-content-center align-items-center pt-5">
                    <form className="p-3 mt-5 mb-5 form-box pt-4 needs-validation" onSubmit={validateForm} novalidate>
                    <div className="row mb-3">
                            <div className="col-sm text-center">
                            <img src="img7.jpg" width="150" height="150" className="rounded-circle" alt=""/>
                            <h3>Profile</h3>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label" for="firstname">First name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="firstname" name="firstname"/>
                                <span id="firstname-error" className="error-message"></span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="lastname" className="col-sm-3 col-form-label">Last name</label>
                            <div className="col-sm-9">
                                <input id="lastname" name="lastname" type="text" className="form-control"/>
                                <span id="lastname-error" className="error-message"></span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="moblie" className="col-sm-3 col-form-label">Moblie Number</label>
                            <div className="col-sm-9">
                                <input type="text" id="moblie" name="moblie" className="form-control"/>
                                <span id="moblie-error" className="error-message"></span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="dob" className="col-sm-3 col-form-label">Date Of Birth</label>
                            <div className="col-sm-9">
                                <input type="date" id="dob" name="dob" className="form-control"/>
                                <span id="dob-error" className="error-message"></span>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label for="city" className="form-label">City</label>
                                <div>
                                    <input type="text" id="city" name="city" className="form-control"/>
                                    <span id="city-error" className="error-message"></span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="state" className="form-label">State</label>
                                <select id="state" name="state" className="form-select">
                                    <option value="">--select--</option>
                                    <option value="AP">AP</option>
                                    <option value="MP">MP</option>
                                    <option value="TN">TN</option>
                                </select>
                                <span id="state-error" className="error-message"></span>
                            </div>
                            <div className="col-md-2">
                                <label  for="zip" className="form-label">Zip</label>
                                <input type="text" id="zip" name="zip" className="form-control"/>
                                <span id="zip-error" className="error-message"></span>
                            </div>
                        </div>
                        {/* <fieldset className="row mb-3">
                            <label id="gender" className="col-form-label col-sm-2 pt-0">Gender</label>
                            <div className="col-sm-10">
                                <div className="male">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" required />
                                    <label className="form-check-label" for="gridRadios1" id="male">Male</label>
                                </div>
                                <div className="female">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" required />
                                    <label className="form-check-label" for="gridRadios2" id="female">Female</label>
                                </div>
                            </div>
                            <span id="gender-error" className="error-message"></span>

                        </fieldset> */}
                        <button type="submit" className="mt-3 btn btn-primary">Create profile</button>
                    </form>
                </div>
            </div>
        );
};
export default Profile;