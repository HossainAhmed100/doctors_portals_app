import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

function DashboardLayout() {
  return (
    <div>
      <NavBar />
      <div className="drawer drawer-mobile container mx-auto">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side border-r-4">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 divide-y-2 text-base-content">
            <li>
              <a href="/">Appoinmetn</a>
            </li>
            <li>
              <a href="/">Date</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
