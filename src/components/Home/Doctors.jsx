import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { ImCross } from "react-icons/im";

export default function Doctors({ data }) {
    const [type, setType] = useState("less");
    const [doctors, setDoctors] = useState(data);

    useEffect(() => {
        if (type === "less") {
            const filteredDoctors = data.slice(0, 6);
            setDoctors(filteredDoctors);
        } else {
            setDoctors(data);
        }
    }, [type, data]);

    return (
        <section className="container mx-auto my-5 md:my-14">
            <div className="px-8 md:px-16 lg:px-32 space-y-5 flex flex-col items-center justify-center">
                {doctors.length > 0 ? (
                    <>
                        <h2 className="text-xl md:text-4xl font-extrabold text-center mx-auto">
                            Our Best Doctors
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                            Our platform connects you with verified, experienced
                            doctors across various specialties — all at your
                            convenience. Whether it's a routine checkup or
                            urgent consultation, book appointments in minutes
                            and receive quality care you can trust.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {doctors.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor} />
                            ))}
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <button
                                className="btn btn-primary bg-[#176AE5] rounded-3xl text-white border-none px-10 md:px-20 hover:bg-blue-800 transition duration-300 ease-in-out"
                                onClick={() =>
                                    setType(type === "less" ? "all" : "less")
                                }
                            >
                                {type === "less" ? "Show All" : "Show Less"}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-red-200 p-5 rounded-full">
                            <ImCross color="red" size={50} />
                        </div>
                        <h2 className="text-xl md:text-4xl font-extrabold text-center mx-auto">
                            Oops!
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                            No Doctors Found. Please try again later.
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}
