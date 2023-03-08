import React from "react";
import Join from "../components/Join/Join";
import Header from "../components/Shared/Header/Header";
import JoinAuth from "../hooks/auth/JoinAuth";

const JoinPage = ({ user, admin, setAdmin }) => {
  return (
    <div>
      <Header user={user} admin={admin} setAdmin={setAdmin} />
      <JoinAuth>
        <Join />
      </JoinAuth>
    </div>
  );
};

export default JoinPage;
