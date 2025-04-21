import React from "react";
import { useLoaderData } from "react-router";
import { FaCalendar } from "react-icons/fa";

export default function Blogs() {
    const data = useLoaderData();

    return (
        <section className="px-6 md:px-16 lg:px-32 flex flex-col gap-5 my-3 md:my-8">
            <h1 className="text-2xl text-center">Blogs</h1>
            <p className="text-gray-500 text-sm md:text-base text-center w-full md:w-3/4 mx-auto">
                Explore a collection of articles designed to inform, inspire,
                and engage. From expert insights to helpful tips, our blogs
                cover a range of topics to keep you updated and empowered.
            </p>
            {data.map((blog) => (
                <div
                    key={blog.id}
                    className="bg-white rounded-3xl flex flex-col gap-4 p-5"
                >
                    <h1 className="text-lg text-black">{blog.question}</h1>
                    <div className="w-full border-1 border-gray-300 border-dashed"></div>
                    <h2 className="text-sm text-blue-600">Answer:</h2>
                    <h1>{blog.answer}</h1>
                    <div className="w-full border-1 border-gray-300 border-dashed"></div>
                    <h1 className="text-gray-500 text-sm flex items-center">
                        <FaCalendar className="inline-block mr-2" />
                        Added at : {blog.datatime}
                    </h1>
                </div>
            ))}
        </section>
    );
}
