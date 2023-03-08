import React from "react";
import Join from "../components/Join/Join";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import JoinAuth from "../hooks/auth/JoinAuth";

const JoinPage = ({ admin, setAdmin }) => {
  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <JoinAuth>
        <Join />
      </JoinAuth>
      <Footer />
    </div>
  );
};

export default JoinPage;
