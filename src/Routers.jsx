import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPwdMail from "./pages/ForgotPwdMail/ForgotPwdMail";
import ResetPwd from "./pages/ResetPwd/ResetPwd";
import AuthRoutes from "./routes/AuthRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import NotFound from "./pages/NotFound/404";
import CreateAnnounce from "./pages/CreateAnnounce/CreateAnnounce";
import UserProfile from "./pages/UserProfile/UserProfile";

const Routers = () => {
  return (
    <Routes>
      <Route element={<AuthRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-pwd-mail" element={<ForgotPwdMail />} />
        <Route path="/reset-pwd" element={<ResetPwd />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/create-announcement" element={<CreateAnnounce />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Route>

      <Route path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
