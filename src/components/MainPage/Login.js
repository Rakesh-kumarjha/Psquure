
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form_page">
      <form onSubmit={handleSubmit}>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required placeholder="someone@gmail.com" />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>

        <div className="text-link ">
          <button type="button"  data-show-reset="" className="forgot-pwd" style={{background:"none"}}>
            <Link to='/forgotpassword'>Forgot your password?</Link>
          </button>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form >

    </div >
  );

  return (
    <div className="login_app">
      <div className="login-form">
        <div className="login-title">
          <h2 style={{fontWeight:"600"}}>Sign In</h2>
          <p>Don't have an account? <span className="text-link">
            <Link to="/regester">Sign up here</Link></span>.</p>
        </div>

        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
