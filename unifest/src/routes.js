import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExpandedFestPage from "./pages/ExpandedFestPage";
import AddToCartPage from "./pages/AddToCartPage";
import PrivateRoutes from "./privateRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/fest/:festId" element={<ExpandedFestPage />} />
        <PrivateRoutes path="/addtocart/:festId" element={<AddToCartPage />} />
        <PrivateRoutes path="/checkout" element={<CheckoutPage />} />
        <PrivateRoutes path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default AppRoutes;
