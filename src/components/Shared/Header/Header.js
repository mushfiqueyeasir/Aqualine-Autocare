import React from "react";
import "./Header.css";
import logo from "../../../assets/logo-white.png";
import { Link, NavLink } from "react-router-dom";

import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import avatar from "../../../assets/avatar.jpg";
import king from "../../../assets/king.png";

const Header = ({ user, admin, setAdmin }) => {
  let url;
  try {
    if (admin) url = king;
    else if (user.photoURL) url = user.photoURL;
    else url = avatar;
  } catch (error) {}

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        user = "";
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleAdminSignOut = () => {
    setAdmin(false);
  };

  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-color">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img src={logo} className="logo img-fluid" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/service">
                Service
              </NavLink>
            </li>
            {admin ? (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/add">
                  Add Service
                </NavLink>
              </li>
            ) : (
              <></>
            )}

            {user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/order">
                    Order
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleSignOut}
                    className="signout nav-link active"
                  >
                    Sign Out
                  </button>
                </li>
                <li className="nav-item">
                  <img src={url} className="resizeImage" alt="" />
                </li>
              </>
            ) : (
              <>
                {admin ? (
                  <>
                    <li className="nav-item">
                      <button
                        onClick={handleAdminSignOut}
                        className="signout nav-link active"
                      >
                        Sign Out
                      </button>
                    </li>
                    <li className="nav-item">
                      <img src={url} className="resizeImage" alt="" />
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/join">
                        Join
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/admin">
                        Admin
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
