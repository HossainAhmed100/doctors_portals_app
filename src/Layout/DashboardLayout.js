import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
        <div className="drawer-side border-r-4 border-t-4  border-l-4">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <ul className="menu space-y-1 p-4 w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="/dashboard">My Appoinmetns</NavLink>
            </li>
            <li>
              <NavLink to="allusers">All Users</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
