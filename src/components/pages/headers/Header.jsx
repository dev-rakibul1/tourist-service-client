import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../asset/tour_logo.png";
import { AuthContext } from "./../../context/ContextProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  const userLoginInfo = (
    <>
      {user?.email && user?.uid ? (
        <>
          <li>
            <Link to="/profile">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <FaUserCircle className="text-2xl" />
              )}
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" bg-pink-100">
      <div className=" w-[90%] navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* navbar toggler icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <span className="font-thin text-2xl">Tourist</span>
            <img src={logo} alt="" className="w-14" />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0"> {userLoginInfo}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
