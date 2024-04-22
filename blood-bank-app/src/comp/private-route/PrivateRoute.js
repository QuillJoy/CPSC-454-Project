import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PrivateRoute = ({ Component }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedIsAuthenticated = sessionStorage.getItem("isAuthenticated");
    return storedIsAuthenticated ? JSON.parse(storedIsAuthenticated) : false;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedIsAuthenticated = sessionStorage.getItem("isAuthenticated");
      setIsAuthenticated(storedIsAuthenticated ? JSON.parse(storedIsAuthenticated) : false);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 

    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;