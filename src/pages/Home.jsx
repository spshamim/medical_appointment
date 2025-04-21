import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Banner from "../components/Home/Banner";
import Doctors from "../components/Home/Doctors";
import Services from "../components/Home/Services";

export default function Home() {
    const data = useLoaderData();

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState(data || []);

    const handleSearch = () => {
        if (!searchTerm) {
            setFilteredDoctors(data);
            return;
        }
        const term = searchTerm.toLowerCase();

        const filtered = data.filter((doctor) =>
            doctor.name.toLowerCase().includes(term)
        );
        setFilteredDoctors(filtered);
    };

    return (
        <>
            <Banner
                searchHandler={handleSearch}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
            />
            <Doctors data={filteredDoctors} />
            <Services />
        </>
    );
}
