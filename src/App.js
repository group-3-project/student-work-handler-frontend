import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//react router dom
import { Routes, Route,  } from "react-router-dom";




//import scrrens
import Login from './screen/Login';
import SignIn from './screen/Signin'
import Forgotpassword from './screen/Forgot-Password';
import OTP from './screen/Otp';
import {CreateAndJoin} from './screen/createAndJoinClass';
import Home  from './screen/homePage';
import ErrorPage from './screen/ErrorPage';


function App() {
  return (<>
  <Routes>

        <Route path="/" element={<Login />} />
        <Route path="Signup" element={<SignIn />} />
        <Route path="forgotpassword" element={<Forgotpassword />} />
        <Route path="OTP" element={<OTP />} />
        <Route path="create" element={<CreateAndJoin />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />


      </Routes>
  </>  );
}

export default App;
