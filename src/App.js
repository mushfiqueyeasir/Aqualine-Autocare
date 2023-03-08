import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ServiceViewPage from "./pages/ServiceViewPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import OrderListPage from "./pages/OrderListPage";
import AddServicePage from "./pages/AddServicePage";
import EditServicePage from "./pages/EditServicePage";
import JoinPage from "./pages/JoinPage";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Loading from "./components/Loading/Loading";

function App() {
  const [admin, setAdmin] = useState(false);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<HomePage user={user} admin={admin} setAdmin={setAdmin} />}
        />

        <Route
          path="/service"
          element={
            <ServiceViewPage user={user} admin={admin} setAdmin={setAdmin} />
          }
        />
        <Route
          path="/service/:serviceID"
          element={
            <ServiceDetailPage user={user} admin={admin} setAdmin={setAdmin} />
          }
        ></Route>

        <Route
          path="/order"
          element={
            <OrderListPage user={user} admin={admin} setAdmin={setAdmin} />
          }
        />

        <Route
          path="/add"
          element={
            <AddServicePage user={user} admin={admin} setAdmin={setAdmin} />
          }
        />
        <Route
          path="/modify/:id"
          element={
            <EditServicePage user={user} admin={admin} setAdmin={setAdmin} />
          }
        />

        <Route
          path="/join"
          element={<JoinPage user={user} admin={admin} setAdmin={setAdmin} />}
        />

        <Route
          path="/admin"
          element={<AdminPage admin={admin} setAdmin={setAdmin} />}
        />

        <Route
          path="*"
          element={<ErrorPage admin={admin} setAdmin={setAdmin} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
