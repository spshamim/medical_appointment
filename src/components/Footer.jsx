import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
    return (
        <div className="bg-white px-14 md:px-28 py-6 md:py-12">
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img src={logo} alt="Logo" className="w-full" />
                    </div>
                    <h2 className="text-xl font-extrabold">Phudu</h2>
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
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook
                            size={30}
                            className="text-blue-600 hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out"
                        />
                    </a>
                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareXTwitter
                            size={30}
                            className="text-black hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out"
                        />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube
                            size={30}
                            className="text-red-600 hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out"
                        />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub
                            size={30}
                            className="text-gray-800 hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
