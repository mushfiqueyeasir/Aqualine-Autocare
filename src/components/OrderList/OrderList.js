import React from "react";
import { Link } from "react-router-dom";
import OrderCard from "./OrderCard/OrderCard";

const OrderList = ({ orders, location, refetch }) => {
  return (
    <div className="container my-5">
      {location === "home" ? (
        <>
          <div className="d-flex align-items-center mt-5">
            <span className="line me-3"></span>

            <h3 className="title">Service List</h3>
          </div>
          <div className="d-flex justify-content-end ">
            <Link className="show text-end mb-2 me-5" to="/service">
              Show More <i className="fa-solid fa-circle-chevron-down ico"></i>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}

      {orders.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {orders.map((order) => (
            <OrderCard order={order} refetch={refetch} />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center">No Orders Yet!</h2>
        </div>
      )}
    </div>
  );
};

export default OrderList;
