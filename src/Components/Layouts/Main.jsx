import { Outlet } from "react-router-dom";
import Footer from "../Sherds/Footer/Footer";
import Navbar from "../Sherds/NavBer/Navbar";

 

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;