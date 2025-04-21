import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-white px-14 md:px-28 py-6 md:py-12">
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img src={logo} alt="Logo" className="w-full" />
                    </div>
                    <h2 className="text-xl font-extrabold">docTALK</h2>
                </div>
                <ul
                    tabIndex={0}
                    className="flex gap-6 flex-col md:flex-row items-center md:items-start text-gray-600 text-sm"
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
                <div className="h-0.5 bg-gray-300 w-full"></div>
                <div className="flex gap-6">
                    <FaFacebook size={30} className="text-blue-600" />
                    <FaSquareXTwitter size={30} className="text-black" />
                    <FaYoutube size={30} className="text-red-600" />
                    <FaGithub size={30} className="text-gray-800" />
                </div>
            </div>
        </div>
    );
}
