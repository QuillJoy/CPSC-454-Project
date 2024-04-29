import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

const PrivateRoute = ({ Component }) => {

  const { isAuthenticated } = useContext(ThemeContext)

    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;