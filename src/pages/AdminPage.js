import React from "react";
import Admin from "../components/Admin/Admin";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const AdminPage = ({ admin, setAdmin }) => {
  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <Admin setAdmin={setAdmin} />
      <Footer />
    </div>
  );
};

export default AdminPage;
