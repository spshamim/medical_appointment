import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import NotFound from "./../components/NotFound/NotFound";
import Home from "../pages/Home";
import Loader from "./../components/Loader/Loader";
import Failed from "./../components/Loader/Failed";
import axios from "axios";
import Details from "../pages/Details";
import Bookings from "../pages/Bookings";
import Blogs from "../pages/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        ErrorBoundary: NotFound,
        children: [
            {
                index: true,
                HydrateFallback: Loader,
                ErrorBoundary: Failed,
                loader: async () => {
                    try {
                        const response = await axios.get("/data.json");

                        // if the response it not a valid JSON then throw an error
                        if (
                            typeof response.data !== "object" ||
                            response.headers["content-type"]?.includes(
                                "text/html"
                            )
                        ) {
                            throw new Response("Invalid response format");
                        }

                        return response.data;
                    } catch (error) {
                        throw new Response(
                            "Failed to load data | fetching error"
                        );
                    }
                },
                Component: Home,
            },
            {
                path: "/doctor/:reginumber",
                HydrateFallback: Loader,
                ErrorBoundary: Failed,
                loader: async () => {
                    try {
                        const response = await axios.get("/data.json");

                        // if the response it not a valid JSON then throw an error
                        if (
                            typeof response.data !== "object" ||
                            response.headers["content-type"]?.includes(
                                "text/html"
                            )
                        ) {
                            throw new Response("Invalid response format");
                        }

                        return response.data;
                    } catch (error) {
                        throw new Response(
                            "Failed to load data | fetching error"
                        );
                    }
                },
                Component: Details,
            },
            {
                path: "/bookings",
                Component: Bookings,
            },
            {
                path: "/blogs",
                HydrateFallback: Loader,
                ErrorBoundary: Failed,
                loader: async () => {
                    try {
                        const response = await axios.get("/blogs.json");

                        // if the response it not a valid JSON then throw an error
                        if (
                            typeof response.data !== "object" ||
                            response.headers["content-type"]?.includes(
                                "text/html"
                            )
                        ) {
                            throw new Response("Invalid response format");
                        }

                        return response.data;
                    } catch (error) {
                        throw new Response(
                            "Failed to load data | fetching error"
                        );
                    }
                },
                Component: Blogs,
            },
        ],
    },
]);

export default router;
