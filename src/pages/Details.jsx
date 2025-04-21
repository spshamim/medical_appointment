import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { setItem } from "../utilities/ManageStorage";
import toast from "react-hot-toast";
import { LuBadgeInfo } from "react-icons/lu";

export default function Details() {
    const navigate = useNavigate();
    const { reginumber } = useParams();
    const data = useLoaderData();
    const doctor = data.find((doc) => doc.reginumber === reginumber);
    const { image, name, education, speciality, workat, availability, fees } =
        doctor || {};

    const handleBookAppointment = () => {
        if (doctor) {
            const appointment = { name, education, speciality, fees };
            const isBooked = setItem(appointment);
            if (isBooked) {
                toast.success("Appointment booked successfully!");
                navigate("/bookings");
            } else {
                toast.error("Appointment already booked!");
            }
        }
    };

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
        <section className="px-6 md:px-16 lg:px-32 flex flex-col gap-5 my-3 md:my-8">
            {doctor ? (
                <>
                    <div className="bg-white rounded-3xl flex justify-center items-center flex-col gap-4 py-6 md:py-10">
                        <h1 className="text-2xl">Doctor Details</h1>
                        <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                            <span className="text-blue-600">{name}</span> is a
                            skilled and dedicated healthcare provider with a
                            strong focus on patient-centered care. With
                            expertise in{" "}
                            <span className="text-blue-600">{speciality}</span>,
                            they are committed to accurate diagnoses, effective
                            treatments, and building lasting trust with every
                            patient.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl flex flex-col lg:flex-row justify-start gap-10 py-6 md:py-10 px-6 md:px-20 w-full">
                        <div className="w-72 overflow-hidden rounded-3xl">
                            <img
                                src={image}
                                alt="Doctor Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2 justify-center items-start flex-1">
                            <h1 className="text-2xl">{name}</h1>
                            <h2 className="text-sm text-gray-500">
                                {education}
                            </h2>
                            <h2 className="text-sm text-gray-500 mb-2">
                                {speciality}
                            </h2>
                            <h2 className="text-sm text-gray-500">
                                Working at
                            </h2>
                            <h2 className="text-sm text-black">{workat}</h2>
                            <div className="border-1 border-dashed w-full border-gray-300 my-1"></div>
                            <h2 className="text-sm text-gray-500 flex items-center gap-2">
                                <span className="border-2 border-gray-400 rounded-full px-1 text-xs">
                                    R
                                </span>
                                Reg No: {reginumber}
                            </h2>
                            <div className="border-1 border-dashed w-full border-gray-300 my-1"></div>
                            <div className="flex items-center gap-3 w-full">
                                <h1>Availability</h1>
                                {availability.map((day, index) => (
                                    <h2
                                        key={index}
                                        className="text-sm text-amber-600 bg-amber-100 border-2 border-amber-600 rounded-4xl px-2 md:px-3 py-1"
                                    >
                                        {day}
                                    </h2>
                                ))}
                            </div>
                            <h2 className="text-sm text-black">
                                Consultation Fee:{" "}
                                <span className="text-blue-600">
                                    {fees} Taka
                                </span>
                                {" (Incl. VAT) "}{" "}
                                <span className="text-blue-600">
                                    Per Consultation
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl flex flex-col gap-4 py-6 md:py-10 px-4 md:px-8">
                        <h1 className="text-xl md:text-2xl text-center">
                            Book An Appointment
                        </h1>
                        <div className="border-1 border-dashed border-gray-300 w-full my-1"></div>
                        <div className="w-full flex justify-between items-center">
                            <h1>Availability</h1>
                            {availability.includes(today) ? (
                                <h1 className="text-green-700 border-2 border-green-700 bg-green-100 px-2 py-1 rounded-4xl text-sm">
                                    Doctor Available Today
                                </h1>
                            ) : (
                                <h1 className="text-red-600 border-2 border-red-600 bg-red-100 px-2 py-1 rounded-4xl text-sm">
                                    Doctor Unavailable Today
                                </h1>
                            )}
                        </div>
                        <div className="border-1 border-dashed border-gray-300 w-full my-1"></div>
                        <h1 className="w-full md:w-5/7 text-xs text-amber-600 bg-amber-100 border-2 border-amber-600 rounded-3xl px-2 md:px-3 py-1 flex items-center">
                            <LuBadgeInfo
                                size={18}
                                className="inline-block text-amber-600 mr-2"
                            />
                            Due to high patient volume, we are currently
                            accepting appointments for today only. We appreciate
                            your understanding and cooperation.
                        </h1>
                        <div className="w-full flex justify-center items-center">
                            {availability.includes(today) ? (
                                <button
                                    className="mt-5 btn btn-primary bg-[#176AE5] rounded-3xl text-white border-none w-1/2 md:w-1/4 lg:w-full hover:bg-blue-700 transition duration-300 ease-in-out text-xs md:text-sm"
                                    onClick={handleBookAppointment}
                                >
                                    Book Appointment Now
                                </button>
                            ) : (
                                <button
                                    className="mt-5 rounded-3xl w-1/2 md:w-1/4 lg:w-full text-xs md:text-sm px-4 py-2 bg-gray-200 text-gray-500 border-none cursor-not-allowed"
                                    disabled
                                >
                                    Book Appointment Now
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="bg-white rounded-3xl flex justify-center items-center flex-col gap-4 py-6 md:py-10">
                    <h1 className="text-2xl">No Doctor Found!</h1>
                    <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                        No doctor found with regi no: {reginumber}. Please check
                        the registration number and try again.
                    </p>
                    <button
                        className="btn btn-primary bg-[#176AE5] rounded-3xl text-white border-none hover:bg-blue-800 transition duration-300 ease-in-out"
                        onClick={() => navigate("/")}
                    >
                        View All Doctors
                    </button>
                </div>
            )}
        </section>
    );
}
