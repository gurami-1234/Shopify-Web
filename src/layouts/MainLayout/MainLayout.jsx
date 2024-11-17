import React from "react";
import { Footer, Navbar } from "components";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="outlet-place">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
