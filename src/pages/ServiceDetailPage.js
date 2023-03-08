import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import ServiceDetail from "../components/ServiceList/ServiceDetail/ServiceDetail";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import auth from "../firebase.init";
import ReactAuthRequire from "../hooks/auth/ReactAuthRequire";
import useFetch from "../hooks/useFetch";

const ServiceDetailPage = ({ admin, setAdmin }) => {
  const { serviceID } = useParams();
  const [service, serviceLoading] = useFetch({
    api: "service",
    unique: serviceID,
  });
  const [user, loading] = useAuthState(auth);
  if (serviceLoading || loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <ReactAuthRequire admin={admin}>
        <ServiceDetail user={user} service={service} admin={admin} />
      </ReactAuthRequire>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
