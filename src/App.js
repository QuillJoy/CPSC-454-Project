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
import DonorSeeAppointments from './comp/donor-see-appointments/DonorSeeAppointments';
import EmployeeSeeDonors from './comp/employee-see-donors/EmployeeSeeDonors';
import Button from '@mui/material/Button';

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
          <Route path="/donorseeappointments" element={<PrivateRoute Component={DonorSeeAppointmentsWithAppBar} />} />
          <Route path="/employeeseedonors" element={<PrivateRoute Component={EmployeeSeeDonorsWithAppBar} />} />
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

function DonorSeeAppointmentsWithAppBar() {
  return (
    <>
    <AppBar />
    <DonorSeeAppointments />
    </>
  )
}

function EmployeeSeeDonorsWithAppBar() {
  return (
    <>
    <AppBar />
    <EmployeeSeeDonors />
    </>
  )
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
