import React, { useEffect, useState } from 'react';
import './ServiceDetail.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { emailValidation, nameValidation, passwordValidation, phoneValidation } from '../../../utilities/validation';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const ServiceDetail = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    if (loading) {
        <Loading />
    }

    const Swal = require('sweetalert2');


    const [services, setServices] = useState([])
    const { serviceID } = useParams();

    useEffect(() => {
        fetch('/services.json')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])

    let serviceName, img, price, detail;
    if (services[serviceID]) {
        serviceName = services[serviceID].serviceName;
        img = services[serviceID].img;
        price = services[serviceID].price;
        detail = services[serviceID].detail;
    }

    const handleCheckOut = (event) => {
        event.preventDefault();
        console.log();
        if (document.getElementsByClassName('text-success').length === 4) {
            console.log('par korce')
            Swal.fire({
                title: 'Success!',
                text: 'Thanks For Your Purchase!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }


    return (
        <div className='container my-5'>
            <div className="row align-items-center mt-5">
                <div className="col-12 col-lg-6  p-3 p-lg-5  my-5 order-2 order-lg-1">

                    <form onSubmit={handleCheckOut} className="form login">
                        {/* Name */}
                        <div className="form__field">
                            <label><i className={user.name ? 'fa-solid fa-user' : 'fa-solid fa-user text-success'}></i><span className="hidden"></span></label>
                            <input value={user?.displayName} onChange={nameValidation} type="text" className="form__input" placeholder="Name" required />
                        </div>
                        {/* Email */}
                        <div className="form__field">
                            <label><i className={user.email ? 'fa-solid fa-envelope text-success' : 'fa-solid fa-envelope'}></i><span className="hidden"></span></label>
                            <input value={user?.email} onChange={emailValidation} type="email" className="form__input" placeholder="Email" required />
                        </div>

                        {/* address */}
                        <div className="form__field">
                            <label><i className="fa-solid fa-map-location-dot"></i></label>
                            <input onChange={nameValidation} type="text" className="form__input" placeholder="Address" required />
                        </div>

                        {/* phone number */}
                        <div className="form__field">
                            <label><i className="fa-solid fa-phone"></i><span className="hidden"></span></label>
                            <input onChange={phoneValidation} type="number" className="form__input" placeholder="Phone Number" required />
                        </div>

                        <div className="form__field">
                            <input type="submit" value="Check Out" />
                        </div>

                    </form>

                </div>
                <div className="col-12  col-lg-6 order-1 order-lg-2">
                    <div className="card flex-row align-items-center shadow justify-content-center px-1">
                        <div>
                            <img src={img} className=" img-rad2" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{serviceName}</h5>
                            <p className="card-text  text-secondary">{detail?.map(d => <li key={d} >{d}</li>)}</p>

                            <h5 className="card-title">Price: <span className='red'>${price}</span></h5>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;