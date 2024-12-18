import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          width: "13rem", 
          display: "none", 
        }}
        className="sm:block" 
      >
        <Sidebar />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
