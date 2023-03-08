import React from "react";
import AddService from "../components/AddService/AddService";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import ReactAuthRequire from "../hooks/auth/ReactAuthRequire";

const AddServicePage = ({ admin, setAdmin }) => {
  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <ReactAuthRequire admin={admin}>
        <AddService />
      </ReactAuthRequire>
      <Footer />
    </div>
  );
};

export default AddServicePage;
