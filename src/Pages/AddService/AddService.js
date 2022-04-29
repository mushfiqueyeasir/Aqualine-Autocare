import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/service';
    const onSubmit = data => {
        const change = data.description.split('.');
        delete data.description;
        data.detail = change;
        const url = `https://aualine-autocare113.herokuapp.com/service`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Services Added',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                navigate(from, { replace: true });
            })
    };

    return (
        <div className='container'>
            <h2 className='text-center my-5 fw-bold'>Add Service</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="form login  wide mx-auto">

                {/* Service Name */}
                <div className="form__field">
                    <label><i className="fa-solid fa-signature"></i></label>
                    <input type="text" className="form__input" placeholder="Service Name" required  {...register("serviceName", { required: true })} />
                </div>
                {/* Price */}
                <div className="form__field">
                    <label><i className="fa-solid fa-hand-holding-dollar"></i></label>
                    <input type="number" className="form__input" placeholder="Price" required {...register("price", { required: true })} />
                </div>

                {/* Details */}
                <div className="form__field">
                    <label ><i className="fa-solid fa-circle-info mt-4"></i></label>
                    <textarea rows="3" cols='50' type="text" className="form__input" placeholder="Details" required {...register("description", { required: true })} />
                </div>

                {/* Image Link */}
                <div className="form__field">
                    <label><i className="fa-solid fa-image"></i></label>
                    <input type="text" className="form__input" placeholder="Image Link" required {...register("img", { required: true })} />
                </div>

                <div className="form__field">
                    <input type="submit" value="Add Service" />
                </div>

            </form>

        </div>



    );
};

export default AddService;