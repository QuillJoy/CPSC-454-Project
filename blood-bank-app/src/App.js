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

function App() {
  return (
    <div className="App">
      <AppBar />
      <DonorAppointment />
    </div>
  );
}

export default App;
