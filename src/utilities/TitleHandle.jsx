import { useEffect } from "react";
import { useLocation } from "react-router";

export default function TitleHandle() {
    const location = useLocation();

    const titles = {
        "/": "Home | docTALK",
        "/blogs": "Blogs | docTALK",
        "/bookings": "Bookings | docTALK",
    };

    useEffect(() => {
        if (titles[location.pathname]) {
            document.title = titles[location.pathname];
        } else if (location.pathname.startsWith("/doctor/")) {
            document.title = "Doctor Details | docTALK";
        } else {
            document.title = "docTALK";
        }
    }, [location.pathname]);

    return null;
}
