import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Header = () => {
  return (
    <div class="navbar  py-3">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/appointment" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>Appointment</NavLink>
            </li>
            <li>
              <NavLink to="/reviews" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>Login</NavLink>
            </li>
          </ul>
        </div>
        <NavLink class="btn btn-ghost normal-case text-xl font-semibold tracking-wide" to="/">
              <h3 className="flex items-center font-bold">
                <img width="35px" className="mr-1" src={logo} alt="logo" />
                 <span className="mt-2 text-secondary">Doctor Portal</span>
              </h3>
          </NavLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal s p-0">
          <li>
            <NavLink  to="/home" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointment" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({isActive})=> isActive ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	" : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      <div class=" navbar-end ">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
