import React from "react";
import ErroPage from "../components/ErrorPage/ErroPage";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const ErrorPage = ({ admin, setAdmin }) => {
  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <ErroPage />
      <Footer />
    </div>
  );
};

export default ErrorPage;
