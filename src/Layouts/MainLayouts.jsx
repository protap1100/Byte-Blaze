import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-20">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-132px)]">
                 <Outlet></Outlet>
            </div>
             <div>
             <Footer></Footer>
             </div>
        </div>
    );
};

export default MainLayouts;