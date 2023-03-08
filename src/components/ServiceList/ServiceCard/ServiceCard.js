import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";
import Swal from "sweetalert2";
import { Delete } from "../../../hooks/delete";

const ServiceCard = ({ service, admin, refetch }) => {
  const { _id, serviceName, img, detail, price } = service;

  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Delete({ api: "service", id: _id, refetch: refetch });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleModify = () => {
    navigate(`/modify/${_id}`);
  };
  return (
    <div id={_id} className="col">
      <div className="card shadow">
        <img
          src={img}
          className="card-img-top img-rad object-fit-cove "
          style={{ height: "20rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{serviceName}</h5>
          <p
            className="card-text  text-secondary"
            style={{ minHeight: "4.5rem" }}
          >
            {detail.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </p>
        </div>
        <div className="mb-3 ms-4">
          <h5 className="card-title text-center mb-3">
            Price: <span className="red">${price}</span>{" "}
          </h5>

          <div className="d-flex flex-column pe-3">
            {admin ? (
              <button
                onClick={handleModify}
                className="detail text-end mb-0 pb-0"
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            ) : (
              <></>
            )}

            <button
              onClick={() => {
                navigateToServiceDetail(_id);
              }}
              className="detail text-start my-0 py-0"
            >
              Details
            </button>
            {admin ? (
              <button onClick={handleDelete} className="detail text-end">
                <i className="fa-solid fa-ban text-danger my-0 py-0 "></i>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
