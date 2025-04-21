import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { ProgressBar } from "react-loader-spinner";

export default function MainLayout() {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <>
            <Header />
            {isNavigating && (
                <ProgressBar
                    visible={true}
                    height="100"
                    width="150"
                    color="#4fa94d"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="mx-auto"
                />
            )}
            <Outlet />
            <Footer />
        </>
    );
}
