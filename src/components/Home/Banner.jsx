import React from "react";
import BannerImage from "../../assets/banner-img-1.png";
import BannerImage2 from "../../assets/banner-img-2.jpg";
import { FaTrashCan } from "react-icons/fa6";

export default function Banner({ setSearchTerm, searchHandler, searchTerm }) {
    return (
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-3 md:mt-5">
            <div className="bg-gradient-to-b from-gray-100/30 to-white/60 flex flex-col gap-7 items-center justify-center border-3 border-b-1 border-white rounded-3xl px-6 md:px-12 py-6 md:py-12">
                <h2 className="text-xl md:text-4xl font-extrabold w-full md:w-1/2 text-center">
                    Dependable Care, Backed by Trusted Professionals.
                </h2>
                <p className="text-gray-500 text-xs md:text-base text-center w-full md:w-3/4">
                    Our platform connects you with verified, experienced doctors
                    across various specialties — all at your convenience.
                    Whether it's a routine checkup or urgent consultation, book
                    appointments in minutes and receive quality care you can
                    trust.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                    <div className="w-full md:w-[40%] relative">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search any Doctor..."
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                            value={searchTerm}
                            className="w-full px-4 py-2 bg-white text-gray-700 rounded-3xl outline-none border-2 border-gray-400 text-sm"
                        />
                        <FaTrashCan
                            size={16}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110 transition duration-300 ease-in-out"
                            onClick={() => setSearchTerm("")}
                        />
                    </div>
                    <button
                        className="btn btn-primary bg-[#176AE5] rounded-3xl text-white border-none w-[50%] md:w-[10%] hover:bg-blue-700 transition duration-300 ease-in-out"
                        onClick={searchHandler}
                    >
                        Search Now
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-10 justify-between w-full px-6 md:px-12">
                    <div className="flex-1">
                        <img
                            src={BannerImage}
                            alt="BannerImage"
                            className="w-full rounded-3xl"
                        />
                    </div>
                    <div className="flex-1">
                        <img
                            src={BannerImage2}
                            alt="BannerImage"
                            className="w-full rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
