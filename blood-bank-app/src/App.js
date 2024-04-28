import './App.css';
import DonorSignInSide from './comp/donor-sign-in/DonorSignInSide';
import EmployeeSignIn from './comp/employee-sign-in/EmployeeSignIn';
import AppBar from './comp/app-bar/AppBar';
import Welcome from './comp/welcome/Welcome';
import DonorSignUp from './comp/donor-sign-up/DonorSignUp';
import DonorHome from './comp/donor-home/DonorHome';
import EmployeeHome from './comp/employee-home/EmployeeHome';
import DonorAppointment from './comp/donor-appointment/DonorAppointment';
import PrivateRoute from './comp/private-route/PrivateRoute';
import {Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { useEffect } from 'react';

function App() {

  return (
    <ThemeProvider>
      <Routes>
          <Route path="/" element={<WelcomeWithAppBar />} />
          <Route path="/donorsignin" element={<DonorSignInSide/>} />
          <Route path="/donorsignup" element={<DonorSignUp />} />
          <Route path="/employeesignin" element={<EmployeeSignIn />} />
          <Route path="/donorhome" element={<PrivateRoute Component={DonorHomeWithAppBar} />} />
          <Route path="/donorappointment" element={<PrivateRoute Component={DonorAppointment} />} />
          <Route path="/employeehome" element={<EmployeeHomeWithAppBar />} />
      </Routes>    
    </ThemeProvider>

  );
}

function WelcomeWithAppBar() {
  const { isAuthenticated, setAuth } = useContext(ThemeContext);
  useEffect(() => {
    setAuth(false);
  }, []); 
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
