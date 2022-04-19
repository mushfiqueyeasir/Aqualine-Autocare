import React from 'react';
import './Header.css';
import logo from '../../../images/logo-white.png'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import avatar from '../../../images/avatar.jpg'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    let url;
    try {
        if (user.photoURL)
            url = user.photoURL;
        else
            url = avatar;

    } catch (error) {

    }


    const handleSignOut = () => {

        signOut(auth).then(() => {
            user = '';
        }).catch((error) => {
            // An error happened.
        });
    }


    return (

        <nav className=" navbar navbar-expand-lg navbar-dark bg-color">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} className='logo img-fluid' alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/service">Service</NavLink>
                        </li>


                        {
                            user ?
                                <>
                                    <li className="nav-item">
                                        <button onClick={handleSignOut} className="signout nav-link active">Sign Out</button>
                                    </li>
                                    <li className="nav-item">
                                        <img src={url} className='resizeImage' alt="" />
                                    </li>
                                </>

                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current=" page" to="/Join">Join</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Header;

