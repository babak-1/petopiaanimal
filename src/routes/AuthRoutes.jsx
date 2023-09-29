import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return !user?.token ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
