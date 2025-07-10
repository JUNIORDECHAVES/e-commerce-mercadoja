import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { useScrollToTop } from "../../Hooks/scrollToTop";

export const PageBase = () => {
    useScrollToTop();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex w-full flex-grow" >
                <div className="hidden md:hidden w-100 h-full fixed top-0 bg-[#ff0000]">
                    <span className="  text-red-900">ola</span>
                </div>
                <main className="mt-30 md:mt-60 m-auto">
                <Outlet />
            </main>
            </div>
            
            <Footer />
        </div>
    );
};