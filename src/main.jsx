import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" />
    </>
);
