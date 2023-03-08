import React from "react";
import Admin from "../components/Admin/Admin";
import Header from "../components/Shared/Header/Header";

const AdminPage = ({ user, admin, setAdmin }) => {
  return (
    <div>
      <Header user={user} admin={admin} setAdmin={setAdmin} />
      <Admin setAdmin={setAdmin} />
    </div>
  );
};

export default AdminPage;
