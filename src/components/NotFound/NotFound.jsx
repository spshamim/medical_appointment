import React from "react";
import { Link } from "react-router";
import Header from "../Header";

export default function NotFound() {
    return (
        <>
            <Header />
            <section className="h-[calc(100vh-63px)] lg:h-[calc(100vh-75.4px)] bg-gradient-to-r from-purple-500 via-[#F05A7E] to-[#C7253E] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl lg:text-9xl font-extrabold text-white tracking-widest">
                        404
                    </h1>
                    <div className="bg-white px-2 text-sm rounded rotate-12 absolute text-purple-600 font-semibold">
                        Page Not Found
                    </div>
                    <p className="text-white mt-5 text-xl md:text-2xl font-bold">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <p className="text-white mt-2 mb-10">
                        It might have been removed or is temporarily
                        unavailable.
                    </p>
                    <Link
                        to="/"
                        className="px-8 py-3 bg-white text-purple-600 font-semibold text-sm uppercase rounded shadow-md hover:bg-gray-200 transition duration-200"
                    >
                        Go Back Home
                    </Link>
                </div>
            </section>
        </>
    );
}
