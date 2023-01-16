import React from "react";
// import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

function NavBar() {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Appointment</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Reviews</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar shadow-md bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiOutlineMenuAlt1 size={25} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a href="/" className="btn">
          Get started
        </a>
      </div>
    </div>
  );
}

export default NavBar;
