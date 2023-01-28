import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  const [httt, setHttt] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button
              onClick={() => setHttt(!httt)}
              data-toggle-theme="dark,light"
              data-act-class="ACTIVECLASS"
            >
              {httt ? "Dark" : "Light"}
            </button>
          </li>
          <li>
            <button onClick={() => handleLogOut()}>SignOut</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  useEffect(() => {
    themeChange(false);
  }, [httt]);

  return (
    <div className="shadow-md bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <HiOutlineMenuAlt1 size={25} />
            </label>
            <ul
              tabIndex={2}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
            >
              {menuItems}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <a href="/" className="btn">
              {user?.displayName}
            </a>
          ) : (
            ""
          )}
          <label htmlFor="drawer-toggle" className="btn btn-ghost lg:hidden">
            <HiOutlineSquares2X2 size={25} />
          </label>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
