import React from "react";
import { useParams } from "react-router-dom";
import EditService from "../components/EditService/EditService";
import Loading from "../components/Loading/Loading";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import AdminAuth from "../hooks/auth/AdminAuth";
import useFetch from "../hooks/useFetch";

const EditServicePage = ({ admin, setAdmin }) => {
  const { id } = useParams();
  const [service, loading] = useFetch({ api: "service", unique: id });
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <AdminAuth admin={admin}>
        <EditService service={service} />
      </AdminAuth>
      <Footer />
    </div>
  );
};

export default EditServicePage;
