import React from "react";
import Swal from "sweetalert2";
import { Delete } from "../../../hooks/delete";

const OrderCard = ({ order, refetch }) => {
  const { _id, service, serviceImage, servicePrice } = order;

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
        Delete({ api: "order", id: _id, refetch: refetch });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div id={_id} className="col">
      <div className="card shadow">
        <img
          src={serviceImage}
          className="card-img-top img-rad object-fit-cove "
          style={{ height: "20rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{service}</h5>
        </div>
        <div className="mb-3 ms-4">
          <h5 className="card-title text-center mb-3">
            Price: <span className="red">${servicePrice}</span>{" "}
          </h5>

          <div className="d-flex flex-column pe-3">
            <button onClick={handleDelete} className="detail text-end">
              <i className="fa-solid fa-ban text-danger my-0 py-0 "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
