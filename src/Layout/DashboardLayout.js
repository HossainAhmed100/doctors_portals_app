import React from "react";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { MdManageAccounts, MdAddShoppingCart } from "react-icons/md";
import { RiStethoscopeFill, RiUserAddFill } from "react-icons/ri";

function DashboardLayout() {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

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
              <NavLink to="myappointment">
                {" "}
                <MdAddShoppingCart size={22} /> My Appoinmetns
              </NavLink>
            </li>
            {isAdmin && (
              <>
                <li>
                  <NavLink to="allusers">
                    <MdManageAccounts size={22} /> Manage Users{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="managedoctors">
                    <RiStethoscopeFill size={22} /> Manage Doctors{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="adddoctor">
                    <RiUserAddFill size={22} /> Add A Doctors{" "}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
