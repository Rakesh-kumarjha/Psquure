import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./Login.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setErrorMessage("");
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setErrorMessage("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const hasLowerCaseLetters = /[a-z]/g;
  const hasUpperCaseLetters = /[A-Z]/g;
  const hasNumbers = /[0-9]/g;

  const validateEmail = (email) => {
    // Email validation logic
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Password validation logic
    if (!password.match(hasLowerCaseLetters)) {
      setErrorMessage("Password must contain a lowercase letter");
    } else if (!password.match(hasUpperCaseLetters)) {
      setErrorMessage("Password must contain an uppercase letter");
    } else if (!password.match(hasNumbers)) {
      setErrorMessage("Password must contain a number");
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
    } else if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
    } else {
      setErrorMessage("");
      setShowPopup(true);
    }
  };

  const renderErrorMessage = () => {
    if (errorMessage) {
      return <div className="error">{errorMessage}</div>;
    }
    return null;
  };

  const renderPopup = () => {
    if (showPopup) {
      return (
        <div className="popup">
          <div className="popup-content">
            <h2>Successfully Registered!</h2>
            <p>Welcome to the company.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="login_app">
      <div className="login-form">
        <div className="login-title">
          <h2 style={{fontWeight:"600"}}>Sign Up</h2>
          <p>
            Already have an account?{" "}
            <span className="text-link">
              <Link to="/login">Sign in here</Link>
            </span>
            .
          </p>
        </div>

        <div className="form_page">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="uname"
                required
                placeholder="First Name"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="uname"
                required
                placeholder="Last Name"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="someone@gmail.com"
              />
            </div>
            <div className="input-container password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="pass"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Password"
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </div>
            {renderErrorMessage()}
            <div className="button-container">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {renderPopup()}
    </div>
  );
};

export default App;
