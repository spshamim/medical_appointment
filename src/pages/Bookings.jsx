import React, { useState, useEffect } from "react";
import Graph from "../components/Bookings/Graph";
import BookingList from "../components/Bookings/BookingList";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { getItem, removeItem } from "../utilities/ManageStorage";

export default function Bookings() {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const appointments = getItem();
        setAppointments(appointments);
    }, []);

    const handleCancelAppointment = (name) => {
        const updatedAppointments = appointments.filter(
            (item) => item.name !== name
        );
        setAppointments(updatedAppointments);
        removeItem(name);
        toast.success("Appointment cancelled successfully.");
    };

    return (
        <>
            {appointments.length > 0 ? (
                <>
                    <Graph appointments={appointments} />
                    <BookingList
                        handleCancelAppointment={handleCancelAppointment}
                        appointments={appointments}
                    />
                </>
            ) : (
                <section className="px-6 md:px-16 lg:px-32 flex flex-col gap-5 my-3 md:my-8">
                    <div className="bg-white rounded-3xl flex justify-center items-center flex-col gap-4 py-6 md:py-10">
                        <h1 className="text-2xl">
                            You have not booked any appointment yet!
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                            Please get appointment first then try again.
                        </p>
                        <button
                            className="btn btn-primary bg-[#176AE5] rounded-3xl text-white border-none hover:bg-blue-800 transition duration-300 ease-in-out"
                            onClick={() => navigate("/")}
                        >
                            Book An Appointment
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}
