import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          width: "13rem", // Equivalent to w-52 (52 units in Tailwind)
          display: "none", // Hidden by default
        }}
        className="sm:block" // This still uses Tailwind to show on small screens or larger
      >
        <Sidebar />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </div>
  );
};

export default Layout;
