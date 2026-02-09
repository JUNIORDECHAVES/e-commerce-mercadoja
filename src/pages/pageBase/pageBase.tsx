import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";

export const PageBase = () => {


    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex w-full flex-grow" >
                
                <main className="mt-30 md:mt-60 m-auto">
                <Outlet />
            </main>
            </div>
            
            <Footer />
        </div>
    );
};