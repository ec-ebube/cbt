import React, { useState } from "react";
// import Image from "../assets/images/onlinecbt.png";
import Icon from "../assets/images/user.png";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

function Welcome() {

  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  const [quiz, setQuiz] = useState(true);
  function getstarted() {
    setQuiz(false)
    
  }
  return (
    <div className="welcomepage">
      <div className="welcomebody">
        {/* <div className="image1">
          <picture src={Image} alt="" classname="welcomeimg"></picture>
        </div> */}
        <div className="introduction">
          <h1 className="top-text">
            <span className="lightheader"> Welcome to </span>
            CosMic
          </h1>
          {quiz ? <div className="text">
            <h2 className="intext">
              Register or sign up with CosMic today and take a short
              quiz.
            </h2>
            <button className="okay" onClick={getstarted}>
              <p className="click">Click to </p>
              <h3>Get Started</h3>
            </button>
          </div> :
            <div className="form">
              <div>
                <img src={Icon} alt='' />
              </div>
              <h2 className="in-text"><span className="bold">Sign in </span><br></br>to take your 5
                minutes quiz.</h2>
              <form className="signin">
                <input type='email' placeholder="Email" autoFocus className="for-form" />
                <br></br>
                <input
                  type={isShown ? "text" : "password"}
                  placeholder="Password"
                  // className="input"
                  className='for-form'
                />
                {/* <label htmlFor="checkbox">Show password </label> */}
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isShown}
                  onChange={togglePassword}
                />
                <br></br>
                <Link to='/instruction' className="okay">
                  <h3>Sign In</h3>
                </Link><br></br>
                <Link to='/register' className="new" onClick={getstarted}>
                  <h3 className="new">Don't have an account</h3>
                </Link>
              </form>
            </div>
          }
          
        </div>
      </div>
    </div>
  );
}

export default Welcome;
