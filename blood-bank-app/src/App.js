import logo from './logo.svg';
import './App.css';
import DonorSignInSide from './comp/donor-sign-in/DonorSignInSide';
import EmployeeSignIn from './comp/employee-sign-in/EmployeeSignIn';
import AppBar from './comp/app-bar/AppBar';
import Welcome from './comp/welcome/Welcome';
import DonorSignUp from './comp/donor-sign-up/DonorSignUp';
import DonorHome from './comp/donor-home/DonorHome';
import EmployeeHome from './comp/employee-home/EmployeeHome';
import DonorAppointment from './comp/donor-appointment/DonorAppointment';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<WelcomeWithAppBar />} />
        <Route path="/donorsignin" element={<DonorSignInSide/>} />
        <Route path="/donorsignup" element={<DonorSignUp />} />
        <Route path="/employeesignin" element={<EmployeeSignIn />} />
        <Route path="/donorhome" element={<DonorHomeWithAppBar />} />
        <Route path="/employeehome" element={<EmployeeHomeWithAppBar />} />

      </Routes>
  );
}

function WelcomeWithAppBar() {
  return (
    <>
      <AppBar />
      <Welcome />
    </>
  );
}

function EmployeeHomeWithAppBar() {
  return (
    <>
      <AppBar />
      <EmployeeHome />
    </>
  );
}

function DonorHomeWithAppBar() {
  return (
    <>
      <AppBar />
      <DonorHome />
    </>
  );
}


export default App;
