import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { LoginAdminPage } from "../pages/authentication/LoginAdminPage";
import ResetPasswordPage from "../pages/authentication/ResetPassword/ResetPasswordPage";
import ResetPasswordTautanPage from "../pages/authentication/ResetPassword/ResetPasswordTautanPage";
// import RegisterPage from "../pages/authentication/ResetPassword/RegisterPage";
import DetailKelasPage from "../pages/ClassDetail/DetailKelasPage";
import DetailKelasPembayaran from "../pages/ClassDetail/DetailKelasPembayaran";
import PembayaranSukses from "../pages/ClassDetail/PembayaranSukses";

export const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<LoginAdminPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        {/* <Route path="/Cobareset" element={<RegisterPage />} /> */}
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/detailKelas" element={<DetailKelasPage />} /> 
        <Route path="/pembayaran" element={<DetailKelasPembayaran />} /> 
        <Route path="/pembayaranSukses" element={<PembayaranSukses />} /> 
      </Routes>
    </BrowserRouter>
  );
};
