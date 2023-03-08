import React from "react";
import Loading from "../components/Loading/Loading";
import ServiceView from "../components/ServiceList/ServiceView/ServiceView";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import useFetch from "../hooks/useFetch";

const ServiceViewPage = ({ admin, setAdmin }) => {
  const [services, loading, refetch] = useFetch({ api: "service" });
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <ServiceView admin={admin} services={services} refetch={refetch} />
      <Footer />
    </div>
  );
};

export default ServiceViewPage;
