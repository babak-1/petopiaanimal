import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPwdMail from "./pages/ForgotPwdMail/ForgotPwdMail";
import ResetPwd from "./pages/ResetPwd/ResetPwd";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-pwd-mail" element={<ForgotPwdMail />} />
      <Route path="/reset-pwd" element={<ResetPwd />} />
    </Routes>
  );
};

export default Routers;
