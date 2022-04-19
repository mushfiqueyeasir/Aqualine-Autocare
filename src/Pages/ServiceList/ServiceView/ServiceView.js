import React from 'react';
import './ServiceView.css'
import useService from '../../../hooks/useService';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const ServiceView = () => {
    const services = useService();
    let length = services.length;
    const location = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if (location !== 'service') {
        length = 3;
    }

    return (
        <div className='container my-5'>

            <div className='d-flex align-items-center mt-5'>
                <span className='line me-3'></span>

                <h3 className='title'>Service  List</h3>
            </div>
            {
                length === 3 ? <div className='d-flex justify-content-end '> <Link className='show text-end mb-2 me-5' to="/service">Show More <i class="fa-solid fa-circle-chevron-down ico"></i></Link></div> : <></>
            }


            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    services.slice(0, length).map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceView;