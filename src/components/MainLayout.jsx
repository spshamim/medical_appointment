import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import TitleHandle from "../utilities/TitleHandle";
import { Toaster } from "react-hot-toast";

export default function MainLayout() {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <>
            <TitleHandle />
            <Header />
            {isNavigating && (
                <div className="flex justify-center items-start w-full h-screen">
                    <span className="loading loading-dots text-primary loading-xl"></span>
                </div>
            )}
            <Outlet />
            <Footer />
            <Toaster position="bottom-right" />
        </>
    );
}
