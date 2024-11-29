import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="font mb-10">
           
         

            <div className="bg-[#F7F7F7] ">
                {/* navbar */}
                <div className="p-10 ">
                    <Navbar></Navbar>
                </div>


                {/*  Dynamic section -- Outlet*/}
                <Outlet></Outlet>
            </div>




            {/* Footer */}
            <div>
                <Footer></Footer>
                
            </div>


        </div>



    );
};

export default MainLayout;