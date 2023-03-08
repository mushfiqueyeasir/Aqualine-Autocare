import React from "react";
import Home from "../components/Home/Home/Home";
import ServiceBanner from "../components/Home/ServiceBanner/ServiceBanner";
import Loading from "../components/Loading/Loading";
import ServiceView from "../components/ServiceList/ServiceView/ServiceView";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import useFetch from "../hooks/useFetch";

const HomePage = ({ user, admin, setAdmin }) => {
  const [services, loading, refetch] = useFetch({ api: "service" });
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header user={user} admin={admin} setAdmin={setAdmin} />
      <Home />
      <ServiceBanner />
      <ServiceView
        services={services.slice(0, 3)}
        admin={admin}
        location="home"
        refetch={refetch}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
