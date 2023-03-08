import React from "react";
import Loading from "../components/Loading/Loading";
import OrderList from "../components/OrderList/OrderList";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import ReactAuthRequire from "../hooks/auth/ReactAuthRequire";
import useFetch from "../hooks/useFetch";

const OrderListPage = ({ user, admin, setAdmin }) => {
  const [orders, loading, refetch] = useFetch({
    api: `order?email=${user.email}`,
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} />
      <ReactAuthRequire admin={admin}>
        <OrderList orders={orders} admin={admin} refetch={refetch} />
      </ReactAuthRequire>
    </div>
  );
};

export default OrderListPage;
