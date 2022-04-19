import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ServiceCard.css';
const ServiceCard = ({ service }) => {
    const { id, serviceName, img, detail, price } = service;

    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className="col">
            <div className="card shadow">
                <img src={img} className="card-img-top img-rad" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text  text-secondary">{detail.map(d => <li key={d} >{d}</li>)}</p>
                    <h5 className="card-title text-center">Price: <span className='red'>${price}</span> </h5>
                </div>
                <div className='mb-3 ms-4'>
                    <button onClick={() => { navigateToServiceDetail(id) }} className='detail'>Details</button>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;