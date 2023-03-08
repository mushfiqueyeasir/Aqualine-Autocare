import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const ReactAuthRequire = ({ children, admin }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  let location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (admin) {
    return children;
  }
  if (!user) {
    return <Navigate to="/join" state={{ from: location }} replace />;
  }
  if (!user.emailVerified && user.providerData[0].providerId === "password") {
    return (
      <div className="container d-flex flex-column align-items-center  my-5">
        <h3 className="text-danger text-center">
          Your Email is not Verified!!
        </h3>
        <h5 className="text-success text-center mt-2">
          Please Verify you Email address
        </h5>
        <div className="mt-5 d-flex align-items-center">
          <p className="m-0 fw-bold text-danger">
            didn't get verification email?
          </p>
          <button
            onClick={async () => {
              await sendEmailVerification();
              toast("Verification Email Sent!!");
            }}
            className="btn btn-info ms-3"
          >
            Send Verification again
          </button>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
  } else return children;
};

export default ReactAuthRequire;
