import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <div className="navbar pr-8 md:px-16 lg:px-32 pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden pl-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/bookings">My Bookings</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img src={logo} alt="Logo" className="w-full" />
                    </div>
                    <h2 className="text-xl font-extrabold">Phudu</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-600">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-3 border-black text-black"
                                    : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bookings"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-3 border-black text-black"
                                    : ""
                            }
                        >
                            My-Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-3 border-black text-black"
                                    : ""
                            }
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-3 border-black text-black"
                                    : ""
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-primary bg-[#176AE5] rounded-3xl text-white border-none hover:bg-blue-700 transition duration-300 ease-in-out">
                    Emergency
                </button>
            </div>
        </div>
    );
}
