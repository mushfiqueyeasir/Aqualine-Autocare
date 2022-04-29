import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import ServiceBanner from './Pages/Home/ServiceBanner/ServiceBanner'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceView from './Pages/ServiceList/ServiceView/ServiceView';
import ServiceDetail from './Pages/ServiceList/ServiceDetail/ServiceDetail';
import ErroPage from './Pages/ErrorPage/ErroPage';
import Join from './Pages/Join/Join';
import ReactAuthRequire from './Pages/ReactAuthRequire/ReactAuthRequire';
import JoinAuth from './Pages/JoinAuth/JoinAuth';
import AddService from './Pages/AddService/AddService';
import Admin from './Pages/Admin/Admin';
import { useState } from 'react';
import EditService from './Pages/EditService/EditService';
import AdminAuth from './Pages/AdminAuth/AdminAuth';
import OrderList from './Pages/OrderList/OrderList';


function App() {
  const [admin, setAdmin] = useState(false);
  return (
    <div >

      <Header admin={admin} setAdmin={setAdmin}></Header>
      <Routes>
        <Route path='/' element={<><Home></Home> <ServiceBanner></ServiceBanner> <ServiceView admin={admin}></ServiceView>  <Footer></Footer> </>}></Route>
        <Route path='/home' element={<><Home></Home> <ServiceBanner></ServiceBanner> <ServiceView admin={admin}></ServiceView>  <Footer></Footer> </>}></Route>
        <Route path='/service' element={<><ServiceView admin={admin}></ServiceView> <Footer></Footer></>}></Route>

        <Route path='/service/:serviceID' element={
          <ReactAuthRequire admin={admin}>
            <ServiceDetail admin={admin}></ServiceDetail>
          </ReactAuthRequire>
        }></Route>

        <Route path='/order' element={
          <ReactAuthRequire admin={admin}>
            <OrderList admin={admin}></OrderList>
          </ReactAuthRequire>
        }></Route>

        <Route path='/add' element={<AddService></AddService>}></Route>
        <Route path='/modify/:id' element={
          <AdminAuth admin={admin}>
            <EditService></EditService>
          </AdminAuth>
        }></Route>

        <Route path='/join' element={
          <JoinAuth>
            <Join></Join>
          </JoinAuth>
        }></Route>

        <Route path='/admin' element={<Admin setAdmin={setAdmin}></Admin>}></Route>



        <Route path='*' element={<ErroPage></ErroPage>}></Route>
      </Routes>

    </div>
  );
}

export default App;
