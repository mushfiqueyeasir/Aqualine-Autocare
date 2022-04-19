import React from 'react';
import './Home.css';
import cover1 from '../../../images/banner2.jpg';
import cover2 from '../../../images/banner1.jpg';
import cover3 from '../../../images/banner3.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-indicators mb-5">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cover1} className="img-fluid d-block w-100  cover"
                        alt="..." />
                    <div
                        className="carousel-caption image-overlay w-100  d-flex flex-column align-items-center justify-content-center">
                        <h5 className="text-center fs-7">MODERN EQUIPMENT</h5>
                        <h5 className="text-center fs-1">Contact less Car Wash</h5>
                        <p className="text-center">Lets make your special day memorable with the best event oranizers in
                            Bangladesh. </p>
                        <div className='mb-5 d-flex flex-column flex-lg-row align-items-center'>

                            <Link to='/service' className='ms-3 serviceBtn' >Book Now </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item ">
                    <img src={cover2} className="img-fluid d-block w-100  cover"
                        alt="..." />
                    <div
                        className="carousel-caption image-overlay w-100  d-flex flex-column align-items-center justify-content-center">
                        <h5 className="text-center fs-7">MODERN EQUIPMENT</h5>
                        <h5 className="text-center fs-1">Quality Service  For You</h5>
                        <p className="text-center">Lets make your special day memorable with the best event oranizers in
                            Bangladesh. </p>
                        <div className='mb-5 d-flex flex-column flex-lg-row align-items-center'>

                            <Link to='/service' className='ms-3 serviceBtn' >Book Now </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item ">
                    <img src={cover3} className="img-fluid d-block w-100  cover"
                        alt="..." />
                    <div
                        className="carousel-caption image-overlay w-100  d-flex flex-column align-items-center justify-content-center">
                        <h5 className="text-center fs-7">MODERN EQUIPMENT</h5>
                        <h5 className="text-center fs-1">Keep Your Car Clean</h5>
                        <p className="text-center">Lets make your special day memorable with the best event oranizers in
                            Bangladesh. </p>
                        <div className='mb-5 d-flex flex-column flex-lg-row align-items-center'>
                            <Link to='/service' className='ms-3 serviceBtn' >Book Now </Link>
                        </div>
                    </div>
                </div>

            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Home;