import logo from './logo.svg';
import './App.css';
import SignInSide from './comp/sign-in/SignInSide';
import AppBar from './comp/app-bar/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <SignInSide />
    </div>
  );
}

export default App;
