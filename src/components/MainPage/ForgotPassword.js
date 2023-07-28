
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (event) => { event.preventDefault(); };

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
          <label>Email</label>
          <input type="email" name="uname" required placeholder="someone@gmail.com" />
          {renderErrorMessage("uname")}
        </div>
        
        <div className="button-container">
          <input type="submit" value={"Reset Your Password"} />
        </div>
      </form >

    </div >
  );

  return (
    <div className="login_app">
      <div className="login-form">
        <div className="login-title">
          <h2 style={{fontWeight:"600"}}>Reset Your Password</h2>
          <p>We will send you an email with instructions on how to reset your password</p>
        </div>

        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
