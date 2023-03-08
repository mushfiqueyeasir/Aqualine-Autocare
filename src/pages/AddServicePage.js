import React from "react";
import AddService from "../components/AddService/AddService";

import Header from "../components/Shared/Header/Header";
import ReactAuthRequire from "../hooks/auth/ReactAuthRequire";

const AddServicePage = ({ user, admin, setAdmin }) => {
  return (
    <div>
      <Header user={user} admin={admin} setAdmin={setAdmin} />
      <ReactAuthRequire admin={admin}>
        <AddService />
      </ReactAuthRequire>
    </div>
  );
};

export default AddServicePage;
