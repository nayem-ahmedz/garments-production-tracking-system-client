import { Outlet } from "react-router";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Root(){
    return(
        <>
            <Header />
            <main className="containerr">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}