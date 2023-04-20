import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

import Home from './Home';
import AdminLayout from './Layout/AdminLayout';
import AdminDashbord from './AdminComponent/Dashbord/AdminDashbord';
import AdminLogin from './AdminComponent/Login/AdminLogin';
import SignUp from './AdminComponent/SignUp/SignUp';
import Logout from './AdminComponent/Logout/Logout';
import EditProfile from './AdminComponent/ProfileEdit/EditProfile';
import ForgetPassword from './AdminComponent/ForgetPassword/ForgetPassword';
import PasswordReset from './AdminComponent/PasswordReset/PasswordReset';
import UserData from './AdminComponent/UserData/UserData';
import UserDataEdit from './AdminComponent/UserData/UserDataEdit';
import UserContectDetail from './AdminComponent/UserContectDetail/UserContectDetail';
import GoodsDetail from './AdminComponent/Goods/GoodsDetail';
import GoodsStatus from './AdminComponent/Goods/GoodsStatus';
import AdminViewDetail from './AdminComponent/Dashbord/Vehicale/AdminViewDetail';
import UserFeedback from './AdminComponent/Feedback/UserFeedback';
import PaymentHistory from './AdminComponent/Goods/PaymentHistory';
import UserPersnalFeedback from './AdminComponent/UserData/UserPersnalFeedback';
import AdminProfileUpdate from './AdminComponent/Profile/AdminProfileUpdate';



// user
import UserLogin from './UserComponent/UserLogin/UserLogin';
import UserSignUp from './UserComponent/SignUp/UserSignUp';
import ClientLayout from './Layout/ClientLayout';
import ClientDashbord from './UserComponent/Dashbord/ClientDashbord';
import ClientProfile from './UserComponent/Profile/ClientProfile';
import EditProfileClient from './UserComponent/EditProfile/EditProfile';
import ClientFileEdit from './UserComponent/EditProfile/ClientFileEdit';
import Vehicale from './UserComponent/Vehicale/Vehicale';
import Mygoods from './UserComponent/Mygoods/Mygoods';
import VehicaleDetail from './UserComponent/Vehicale/VehicaleDetail';
import AddMyGoods from './UserComponent/Mygoods/AddMyGoods';
import Feedback from './UserComponent/Feedback/Feedback';
import UserForgetPassword from './UserComponent/FoorgetPassword/UserForgetPassword';
import UserResetPassword from './UserComponent/FoorgetPassword/UserResetPassword';
import MyVehicale from './UserComponent/Vehicale/MyVehicale';
import ClientPayment from './UserComponent/Payment/ClientPayment';
import OtpVerification from './UserComponent/Payment/OtpVerification';
import UserSideGoodsStatus from './UserComponent/Mygoods/UserSideGoodsStatus';
import PayemntHistry from './UserComponent/Payment/PayemntHistry';
import MyFeedback from './UserComponent/MyFeedback/MyFeedback';



//
import Error from './404/Error';
import Faq from './Faq/Faq';
import About from './About/About';
import Contact from './Contact/Contact';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Services from './Services/Services';
import Footer from './Footer/Footer';


function App() {
  
  // const [adminPrivateRoute, setAdminPrivateRoute] = useState(false)
  const [adminData, setAdminData] = useState([])
  const [clientData, setClientData] = useState([])

  return (
   <>
     <Routes>
      <Route path='/' element={<Home setAdminData={setAdminData} setClientData={setClientData} />}/>
      <Route path='/Faq/Faq' element={<Faq />}/>
      <Route path='/About/About' element={<About />}/>
      <Route path='/Contact/Contact' element={<Contact />}/>
      <Route path='/PrivacyPolicy/PrivacyPolicy' element={<PrivacyPolicy />}/>
      <Route path='/Services/Services' element={<Services />}/>
      <Route path='/Footer/Footer' element={<Footer />}/>

      {/* admin routes */}
      <Route path='/AdminComponent/Login/AdminLogin' element={<AdminLogin setAdminData={setAdminData}/>}/>
      <Route path='/AdminComponent/ForgetPassword/ForgetPassword' element={<ForgetPassword/>}/>
      <Route path='/AdminComponent/PasswordReset/PasswordReset/:id' element={<PasswordReset/>}/>
      <Route path='/AdminComponent/SignUp/SignUp' element={<SignUp />}/>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='/admin/AdminComponent/Dashbord/AdminDashbord/:id' element={<AdminDashbord adminData={adminData} />}/>
          <Route path='/admin/AdminComponent/Profile/AdminProfile/:id' element={<AdminDashbord />}/>
          <Route path='/admin/AdminComponent/ProfileEdit/EditProfile/:id' element={<EditProfile />}/>
          <Route path='/admin/AdminComponent/Profile/AdminProfileUpdate/:id' element={<AdminProfileUpdate />}/>
          <Route path='/admin/AdminComponent/UserData/UserData/:id' element={<UserData/>}/>
          <Route path='/admin/AdminComponent/UserData/UserDataEdit/:id' element={<UserDataEdit adminData={adminData} />}/>
          <Route path='/admin/AdminComponent/UserContectDetail/UserContectDetail/:id' element={<UserContectDetail/>}/>
          <Route path='/admin/AdminComponent/Goods/GoodsDetail/:id' element={<GoodsDetail/>}/>
          <Route path='/admin/AdminComponent/Goods/GoodsStatus/:id/:pid' element={<GoodsStatus/>}/>
          <Route path='/admin/AdminComponent/Vehicale/AdminViewDetail/:id' element={<AdminViewDetail/>}/>
          <Route path='/admin/AdminComponent/Feedback/UserFeedback/:id' element={<UserFeedback/>}/>
          <Route path='/admin/AdminComponent/UserData/UserPersnalFeedback/:id/:uid' element={<UserPersnalFeedback/>}/>
          <Route path='/admin/AdminComponent/Goods/PaymentHistory/:id' element={<PaymentHistory/>}/>
          <Route path='/admin/AdminComponent/Logout/Logout' element={<Logout />}/>
        </Route>

      {/* user routes */}
      <Route path='/UserComponent/UserLogin/UserLogin' element={<UserLogin setClientData={setClientData}  />}/>
      <Route path='/UserComponent/SignUp/UserSignUp' element={<UserSignUp />}/>
      <Route path='/UserComponent/FoorgetPassword/UserForgetPassword' element={<UserForgetPassword />}/>
      <Route path='/UserComponent/FoorgetPassword/UserResetPassword/:id' element={<UserResetPassword />}/>

        <Route path='/client' element={<ClientLayout />}>
          <Route path='/client/UserComponent/Dashbord/ClientDashbord/:id' element={<ClientDashbord />}/>
          <Route path='/client/UserComponent/Profile/ClientProfile/:id' element={<ClientProfile />}/>
          <Route path='/client/UserComponent/EditProfile/EditProfile/:id' element={<EditProfileClient />}/>
          <Route path='/client/UserComponent/EditProfile/ClientFileEdit/:id' element={<ClientFileEdit />}/>
          <Route path='/client/UserComponent/Mygoods/Mygoods/:id' element={<Mygoods  />}/>
          <Route path='/client/UserComponent/Mygoods/AddMyGoods/:id' element={<AddMyGoods clientData={clientData} />}/>
          <Route path='/client/UserComponent/Mygoods/UserSideGoodsStatus/:id/:pid' element={<UserSideGoodsStatus />}/>
          <Route path='/client/UserComponent/Vehicale/VehicaleDetail/:id' element={<VehicaleDetail clientData={clientData}  />}/>
          <Route path='/client/UserComponent/Vehicale/Vehicale/:id' element={<Vehicale />}/>
          <Route path='/client/UserComponent/Vehicale/MyVehicale/:id' element={<MyVehicale />}/>
          <Route path='/client/UserComponent/Feedback/Feedback/:id' element={<Feedback />}/>
          <Route path='/client/UserComponent/Payment/ClientPayment/:id/:tid/:pri' element={<ClientPayment clientData={clientData} />}/>
          <Route path='/client/UserComponent/Payment/OtpVerification/:id' element={<OtpVerification />}/>
          <Route path='/client/UserComponent/Payment/PayemntHistry/:id' element={<PayemntHistry />}/>
          <Route path='/client/UserComponent/MyFeedback/MyFeedback/:id' element={<MyFeedback />}/>
        </Route>
      <Route path='*' element={<Error/>}/>
     </Routes>
     <ToastContainer />
   </>
  );
}

export default App;
