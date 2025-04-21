import React from "react";
import { useNavigate } from "react-router";

export default function DoctorCard({ doctor }) {
    const navigate = useNavigate();
    const weekdays = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ];
    const today = weekdays[new Date().getDay()];

    return (
        <div className="p-6 bg-white rounded-3xl flex flex-col gap-2 justify-between">
            <div className="aspect-[3/2.4] overflow-hidden rounded-3xl">
                <img
                    src={doctor.image}
                    alt="Doctor Avatar"
                    className="w-full h-full rounded-3xl"
                />
            </div>

            <div className="flex items-center gap-3">
                {doctor.availability.includes(today) ? (
                    <h1 className="text-green-700 bg-green-200 border-2 border-green-700 rounded-4xl px-2 md:px-3 py-1 text-xs md:text-sm">
                        Available
                    </h1>
                ) : (
                    <h1 className="text-amber-600 bg-amber-100 border-2 border-amber-600 rounded-4xl px-2 md:px-3 py-1 text-xs md:text-sm">
                        Unavailable
                    </h1>
                )}

                <h1 className="text-blue-600 bg-blue-100 border-2 border-blue-600 rounded-4xl px-2 md:px-3 py-1 text-xs md:text-sm">
                    {doctor.experience}+ Experience
                </h1>
            </div>
            <h2 className="text-xl text-black">{doctor.name}</h2>
            <h2 className="text-sm text-gray-500">
                {doctor.education} {doctor.speciality}
            </h2>
            <div className="border-1 border-dashed w-full border-gray-300"></div>
            <h2 className="text-sm text-gray-500 flex items-center gap-2">
                <span className="border-2 border-gray-400 rounded-full px-1 text-xs">
                    R
                </span>
                Reg: {doctor.reginumber}
            </h2>
            <button
                className="px-3 py-2 text-sm border-2 border-blue-700 text-blue-700 rounded-3xl cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
                onClick={() => navigate(`/doctor/${doctor.reginumber}`)}
            >
                View Details
            </button>
        </div>
    );
}
