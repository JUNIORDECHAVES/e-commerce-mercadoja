import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";

export const PageBase = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};