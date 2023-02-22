import React from "react";
import Icon from "../assets/images/user.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
    // This variable determines whether password is shown or not
    const [isShown, setIsSHown] = useState(false);

    // This function is called when the checkbox is checked or unchecked
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };

    return (
        <div className="register-page">
            <div className="welcomebody">
                <div className="introduction">
                    <h1 className="top-text">
                        <span className="lightheader"> Welcome to </span>
                        CosMic
                    </h1>
                    <div className="reg-form">
                        <div>
                            <img src={Icon} alt="" />
                        </div>
                        <h2 className="in-text">
                            <span className="bold">Register </span>
                            <br></br>to take your 5 minutes quiz.
                        </h2>

                        <form className="signin">
                            <input
                                type="text"
                                placeholder="Name"
                                autoFocus
                                className="for-form2"
                            />
                            <br></br>
                            <input type="email"
                                placeholder="Email"
                                className="for-form2" />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="for-form2"
                            />
                            <input
                                type={isShown ? "text" : "password"}
                                placeholder="Password"
                                // className="input"
                                className="for-form2"
                                required
                            />
                            {/* <label htmlFor="checkbox">Show password </label> */}
                            <input
                                id="checkbox"
                                type="checkbox"
                                checked={isShown}
                                onChange={togglePassword}
                            />
                            <br></br>
                            <Link to="/instruction" className="okay">
                                <h3>Register</h3>
                            </Link>
                            <br></br>
                            <Link to="/" className="new">
                                <h3 className="new">Already have an account</h3>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
}

export default Register;
