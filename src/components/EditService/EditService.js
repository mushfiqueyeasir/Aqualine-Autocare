import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditService.css";
import Swal from "sweetalert2";
import { Update } from "../../hooks/update";

const EditService = ({ service }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/service";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const change = data.description.split(",");
    delete data.description;
    data.detail = change;
    data._id = service._id;

    Update(data);
    Swal.fire({
      title: "Success!",
      text: "Service Modified!",
      icon: "success",
      confirmButtonText: "Ok",
    });
    navigate(from, { replace: true });
  };
  const checked = (event) => {
    event.target.parentNode.children[0].children[0].classList.add("bgColor");
  };
  return (
    <div>
      <div className="container ">
        <h2 className="text-center my-5 fw-bold">Modify Service</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form login  wide mx-auto"
        >
          {/* Service Name */}
          <div className="form__field">
            <label>
              <i className="fa-solid fa-signature"></i>
            </label>
            <input
              onBlurCapture={checked}
              defaultValue={service.serviceName}
              type="text"
              className="form__input"
              placeholder="Service Name"
              required
              {...register("serviceName", { required: true })}
            />
          </div>
          {/* Price */}
          <div className="form__field">
            <label>
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </label>
            <input
              onBlurCapture={checked}
              defaultValue={service.price}
              type="number"
              className="form__input"
              placeholder="Price"
              required
              {...register("price", { required: true })}
            />
          </div>

          {/* Details */}
          <div className="form__field">
            <label>
              <i className="fa-solid fa-circle-info mt-4"></i>
            </label>
            <textarea
              onBlurCapture={checked}
              defaultValue={service.detail}
              rows="3"
              cols="50"
              type="text"
              className="form__input"
              placeholder="Details"
              required
              {...register("description", { required: true })}
            />
          </div>

          {/* Image Link */}
          <div className="form__field">
            <label>
              <i className="fa-solid fa-image"></i>
            </label>
            <input
              onBlurCapture={checked}
              defaultValue={service.img}
              type="text"
              className="form__input"
              placeholder="Image Link"
              required
              {...register("img", { required: true })}
            />
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
