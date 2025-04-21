import { ImCross } from "react-icons/im";
import { useRouteError } from "react-router";

export default function Failed() {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 mt-6 md:mt-10 mb-8 md:mb-20 mx-24 space-y-5 border-2 border-dashed border-purple-700 p-10">
            <div className="bg-red-200 p-5 rounded-full">
                <ImCross color="red" size={50} />
            </div>
            <h1 className="text-sm md:text-4xl font-semibold text-red-600">
                {error?.data || "Something went wrong!"}
            </h1>
            <h1 className="text-xs md:text-lg font-semibold text-gray-600">
                Please try again later or contact support.
            </h1>
        </div>
    );
}
