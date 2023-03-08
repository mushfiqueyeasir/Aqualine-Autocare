import React from "react";
import "./ServiceBanner.css";
import wash from "../../../assets/washer.png";
import carClean from "../../../assets/wash.png";
import cleanTool from "../../../assets/cleanTool.png";
import spray from "../../../assets/spray.png";
import wheel from "../../../assets/wheel.png";
import { Link } from "react-router-dom";

const ServiceBanner = () => {
  return (
    <main className="container my-5">
      {/* service banner */}
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 order-1 details text-center text-lg-start">
          <div className="d-flex align-items-center">
            <span className="line me-3"></span>
            <h3>MODERN EQUIPMENT</h3>
          </div>

          <h1>Professional washing and cleaning of your car</h1>

          <p>
            Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus
            faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex
            eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam
            lobortis est.
          </p>

          <h2 className="mt-5">
            Call for book: <span>8-800-10-500</span>{" "}
          </h2>
          <div className="my-5">
            <Link to="/service" className="serviceBtn">
              Book Now
            </Link>
          </div>
        </div>
        <div className="col-0 col-lg-1 order-2"></div>

        <div className="col-12 col-lg-6 order-2 order-lg-3 d-none  d-lg-block ">
          <img src={wash} className="img-fluid" alt="" />
        </div>
      </div>

      {/* service list  */}

      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 my-5">
        <div className="col">
          <div className="card border-endd">
            <div className="card-body">
              <img src={carClean} className="img-fluid size" alt="" />
              <h5 className="card-title">Contactless Washing </h5>
              <p className="card-text">
                Vestibulum tortor risus, rutrum at congue sed ultricies
                finibus..
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body border-endd">
              <img src={cleanTool} className="img-fluid size" alt="" />
              <h5 className="card-title">Safety Materials</h5>
              <p className="card-text">
                Cras aliquam tristique metus, eu gravida diam vestibulum
                gravida.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body border-endd">
              <img src={spray} className="img-fluid size" alt="" />
              <h5 className="card-title">Modern Equipment</h5>
              <p className="card-text">
                Fusce maximus molestie nisl, ut dapibus libero vestibulum
                aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <img src={wheel} className="img-fluid size" alt="" />
              <h5 className="card-title">Extensive Cleaning</h5>
              <p className="card-text">
                Sestibulum non dolor sit amet mi moles tincidunt vel non velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceBanner;
