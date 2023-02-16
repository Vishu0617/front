import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './Home';
import AdminLayout from './Layout/AdminLayout';
import AdminDashbord from './AdminComponent/Dashbord/AdminDashbord';
import AdminLogin from './AdminComponent/Login/AdminLogin';
import SignUp from './AdminComponent/SignUp/SignUp';
import Logout from './AdminComponent/Logout/Logout';
import EditProfile from './AdminComponent/ProfileEdit/EditProfile';
import ForgetPassword from './AdminComponent/ForgetPassword/ForgetPassword';
import PasswordReset from './AdminComponent/PasswordReset/PasswordReset';
import Footer from './Footer/Footer';
import UserData from './AdminComponent/UserData/UserData';
import UserDataEdit from './AdminComponent/UserData/UserDataEdit';
import UserContectDetail from './AdminComponent/UserContectDetail/UserContectDetail';




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
import Rating from './UserComponent/Rating/Rating';


//
import Error from './404/Error';
import Faq from './Faq/Faq';
import About from './About/About';
import Contact from './Contact/Contact';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Services from './UserComponent/Services/Services';

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


      {/* admin routes */}
      <Route path='/AdminComponent/Login/AdminLogin' element={<AdminLogin setAdminData={setAdminData}/>}/>
      <Route path='/AdminComponent/ForgetPassword/ForgetPassword' element={<ForgetPassword/>}/>
      <Route path='/AdminComponent/PasswordReset/PasswordReset/:id' element={<PasswordReset/>}/>
      <Route path='/AdminComponent/SignUp/SignUp' element={<SignUp />}/>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='/admin/AdminComponent/Dashbord/AdminDashbord/:id' element={<AdminDashbord adminData={adminData} />}/>
          <Route path='/admin/AdminComponent/Profile/AdminProfile/:id' element={<AdminDashbord />}/>
          <Route path='/admin/AdminComponent/ProfileEdit/EditProfile/:id' element={<EditProfile />}/>
          <Route path='/admin/AdminComponent/UserData/UserData/:id' element={<UserData/>}/>
          <Route path='/admin/AdminComponent/UserData/UserDataEdit/:id' element={<UserDataEdit/>}/>
          <Route path='/admin/AdminComponent/UserContectDetail/UserContectDetail/:id' element={<UserContectDetail/>}/>
          <Route path='/admin/AdminComponent/Logout/Logout' element={<Logout />}/>
        </Route>

      {/* user routes */}
      <Route path='/UserComponent/UserLogin/UserLogin' element={<UserLogin setClientData={setClientData} />}/>
      <Route path='/UserComponent/SignUp/UserSignUp' element={<UserSignUp />}/>
        <Route path='/client' element={<ClientLayout  clientData={clientData} />}>
          <Route path='/client/UserComponent/Dashbord/ClientDashbord/:id' element={<ClientDashbord />}/>
          <Route path='/client/UserComponent/Profile/ClientProfile/:id' element={<ClientProfile />}/>
          <Route path='/client/UserComponent/EditProfile/EditProfile/:id' element={<EditProfileClient />}/>
          <Route path='/client/UserComponent/EditProfile/ClientFileEdit/:id' element={<ClientFileEdit />}/>
          <Route path='/client/UserComponent/Mygoods/Mygoods/:id' element={<Mygoods  />}/>
          <Route path='/client/UserComponent/Vehicale/Vehicale/:id' element={<Vehicale />}/>
          <Route path='/client/UserComponent/Services/Services/:id' element={<Services />}/>
          <Route path='/client/UserComponent/Rating/Rating/:id' element={<Rating />}/>
        </Route>
      <Route path='*' element={<Error/>}/>
     </Routes>
        <Footer />
     
   
     
   </>
  );
}

export default App;
