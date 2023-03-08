import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Admin.css";
const Admin = ({ setAdmin }) => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/home";

  const usernameBlur = (event) => {
    setUsername(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      username === `${process.env.REACT_APP_user}` &&
      password === `${process.env.REACT_APP_password}`
    ) {
      setAdmin(true);
      navigate(from, { replace: true });
    } else {
      setErrorMessage("Username Or Password didn't matched");
    }
  };

  return (
    <div className="container my-5 fullHeight">
      <h2 className="text-center fw-bold">Admin Login</h2>

      <form onSubmit={handleLogin} className="form login  wide mx-auto">
        {/* error */}
        <div className="form__field justify-content-center">
          <p className="text-danger fs-6 fw-bold">{errorMessage}</p>
        </div>

        {/* Service Name */}
        <div className="form__field">
          <label>
            <i className="fa-solid fa-user-shield"></i>
          </label>
          <input
            onBlur={usernameBlur}
            type="text"
            className="form__input"
            placeholder="Username"
            required
          />
        </div>
        {/* Price */}
        <div className="form__field">
          <label>
            <i className="fa-solid fa-key"></i>
          </label>
          <input
            onBlur={passwordBlur}
            type="password"
            className="form__input"
            placeholder="Price"
            required
          />
        </div>

        <div className="form__field">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Admin;
