import React from "react";
import servicesData from "./../../constant/serviceData";
import CountUp from "react-countup";

export default function Services() {
    return (
        <section className="container mx-auto my-7 md:my-14">
            <div className="px-8 md:px-16 lg:px-32 space-y-5">
                <h2 className="text-xl md:text-4xl font-extrabold text-center mx-auto">
                    We Provide Best Medical Services
                </h2>
                <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                    Our platform connects you with verified, experienced doctors
                    across various specialties — all at your convenience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-3xl p-6 flex flex-col justify-between"
                        >
                            <div>
                                <img src={service.img} alt={service.title} />
                            </div>
                            <h3 className="text-xl md:text-3xl font-extrabold my-2">
                                <CountUp
                                    key={service.id}
                                    end={service.count}
                                    duration={5}
                                    enableScrollSpy
                                    useEasing={true}
                                />
                                {"+"}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
