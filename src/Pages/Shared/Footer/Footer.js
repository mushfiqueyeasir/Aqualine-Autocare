import React from 'react';
import './Footer.css';
import logo from '../../../images/logo-white.png'
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    // console.log = console.warn = console.error = () => { };

    return (
        <footer className='bg-black'>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <img src={logo} className="img-fluid w-25" alt="" />
                        <p className='text-white'>We care your car like our own. We do our job professionally and sincerely.  </p>
                    </div>

                    <div className="col-6 col-lg-2  d-flex justify-content-center mt-4">
                        <ul className='text-white '>
                            <h4>Useful Links </h4>
                            <li><Link to='/result' className='Links'>Result</Link></li>
                            <li><Link to='/service' className='Links'>Service</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-2 mt-4 ">
                        <ul className='text-white'>
                            <h4 >Support</h4>
                            <li><Link to='/join' className='Links'>Join</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4  mt-4 text-white">
                        <div>
                            <h4 className='fw-bolder '>Tips & Guides</h4>
                            <p className='my-3'>Inspect your vehicle regularly</p>
                            <hr />
                            <p className='mt-2'>Clean the brake dust off your wheels</p>
                        </div>

                    </div>
                </div>
                <hr className='' />
                <h5 className='text-white text-center my-3 fs-6'>Copyright ©2022 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <a target="__blank" className='owner' href='https://github.com/mushfiqueyeasir'>Mushfique Yeasir</a></h5>
            </div>

        </footer>
    );
};

export default Footer;