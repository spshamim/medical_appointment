import { useEffect } from "react";
import { useLocation } from "react-router";

export default function TitleHandle() {
    const location = useLocation();

    const titles = {
        "/": "Home",
        "/blogs": "Blogs",
        "/bookings": "Bookings",
    };

    useEffect(() => {
        if (titles[location.pathname]) {
            document.title = titles[location.pathname];
        } else if (location.pathname.startsWith("/doctor/")) {
            document.title = "Doctor Details";
        } else {
            document.title = "Phudu - A Doctor's Appointment Booking System";
        }
    }, [location.pathname]);

    return null;
}
