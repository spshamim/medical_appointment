export default function BookingList({ appointments, handleCancelAppointment }) {
    return (
        <section className="px-6 md:px-16 lg:px-32 flex flex-col gap-5 my-3 md:my-12">
            <h1 className="text-2xl text-center">My Today Appointments</h1>
            <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                Our platform connects you with verified, experienced doctors
                across various specialties — all at your convenience.
            </p>
            {appointments.map((appointment, index) => (
                <div
                    key={index}
                    className="bg-white rounded-3xl flex flex-col gap-4 p-6"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl">{appointment.name}</h1>
                            <h1 className="text-sm text-gray-500">
                                {appointment.education} {appointment.speciality}
                            </h1>
                        </div>
                        <h1 className="text-sm text-gray-500">
                            Appointment Fee : {appointment.fees} Taka + VAT
                        </h1>
                    </div>
                    <div className="w-full border-1 border-gray-300 border-dashed"></div>
                    <div className="w-full flex justify-center items-center">
                        <button
                            className="rounded-3xl text-red-500 border-2 border-red-500 px-5 py-2 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out cursor-pointer w-1/2 md:w-full"
                            onClick={() =>
                                handleCancelAppointment(appointment.name)
                            }
                        >
                            Cancel Appointment
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}
