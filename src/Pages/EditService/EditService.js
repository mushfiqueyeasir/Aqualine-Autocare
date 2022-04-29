import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './EditService.css';
import Swal from 'sweetalert2';

const EditService = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/service';

    useEffect(() => {
        const url = `https://aualine-autocare113.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        const change = data.description.split(',');
        delete data.description;
        data.detail = change;
        const url = `https://aualine-autocare113.herokuapp.com/service/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Service Modified!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                navigate(from, { replace: true });
            })
    };
    const checked = event => {
        event.target.parentNode.children[0].children[0].classList.add('bgColor')
    }
    return (
        <div>
            <div className='container'>
                <h2 className='text-center my-5 fw-bold'>Modify Service</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="form login  wide mx-auto">

                    {/* Service Name */}
                    <div className="form__field">
                        <label><i className="fa-solid fa-signature"></i></label>
                        <input onBlurCapture={checked} defaultValue={service.serviceName} type="text" className="form__input" placeholder="Service Name" required  {...register("serviceName", { required: true })} />
                    </div>
                    {/* Price */}
                    <div className="form__field">
                        <label><i className="fa-solid fa-hand-holding-dollar"></i></label>
                        <input onBlurCapture={checked} defaultValue={service.price} type="number" className="form__input" placeholder="Price" required {...register("price", { required: true })} />
                    </div>

                    {/* Details */}
                    <div className="form__field">
                        <label ><i className="fa-solid fa-circle-info mt-4"></i></label>
                        <textarea onBlurCapture={checked} defaultValue={service.detail} rows="3" cols='50' type="text" className="form__input" placeholder="Details" required {...register("description", { required: true })} />
                    </div>

                    {/* Image Link */}
                    <div className="form__field">
                        <label><i className="fa-solid fa-image"></i></label>
                        <input onBlurCapture={checked} defaultValue={service.img} type="text" className="form__input" placeholder="Image Link" required {...register("img", { required: true })} />
                    </div>

                    <div className="form__field">
                        <input type="submit" value="Add Service" />
                    </div>

                </form>

            </div>


        </div>
    );
};

export default EditService;