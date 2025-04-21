import { CirclesWithBar } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className="flex justify-center items-center bg-gray-100 mt-6 md:mt-50 mb-8 md:mb-20 mx-24">
            <CirclesWithBar
                height="100"
                width="100"
                color="blue"
                outerCircleColor="blue"
                innerCircleColor="blue"
                barColor="blue"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}
