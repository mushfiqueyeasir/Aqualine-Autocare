import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About'
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

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<><Home></Home> <ServiceBanner></ServiceBanner> <ServiceView></ServiceView> </>}></Route>
        <Route path='/home' element={<><Home></Home> <ServiceBanner></ServiceBanner> <ServiceView></ServiceView> </>}></Route>
        <Route path='/service' element={<ServiceView></ServiceView>}></Route>

        <Route path='/service/:serviceID' element={
          <ReactAuthRequire>
            <ServiceDetail></ServiceDetail>
          </ReactAuthRequire>
        }></Route>

        <Route path='/about' element={<About></About>}></Route>

        <Route path='/join' element={
          <JoinAuth>
            <Join></Join>
          </JoinAuth>

        }></Route>

        <Route path='*' element={<ErroPage></ErroPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
