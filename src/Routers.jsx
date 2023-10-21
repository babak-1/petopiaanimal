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
import Details from "./pages/Details/Details";
import AnnounceList from "./pages/AnnounceList/AnnounceList";
import CardsList from "./pages/CardsList/CardsList";

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
      <Route path="announce-details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="announce-list" element={<AnnounceList />} />
      <Route path="cards-list/:id" element={<CardsList />} />
    </Routes>
  );
};

export default Routers;
