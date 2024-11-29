import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (

        <div className="navbar bg-[#9538E2] text-primary-content rounded-xl w-full flex flex-col outline outline-2 outline-gray-400 outline-offset-8">
            <div className="flex justify-evenly items-center w-full px-4 space-x-96 my-7  ">
                {/* Logo */}
                <div>
                    <button className="font-bold text-3xl text-white">Gadget Heaven</button>
                </div>

                {/* Navigation Links */}
                <div className="text-white flex space-x-4 ">
                    <NavLink to='/' className="btn btn-ghost text-base">Home</NavLink >
                    <NavLink to='/statistics' className="btn btn-ghost text-base">Statistics</NavLink >
                    <NavLink to='/dashboard' className="btn btn-ghost text-base">Dashboard</NavLink >
                    <NavLink to='/about' className="btn btn-ghost text-base">About Us</NavLink >
                </div>

                {/* Icon Buttons */}
                <div className="flex space-x-5">
                    <NavLink tabIndex={0} role="button" className="btn border-t-neutral-200 btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </NavLink>
                    <NavLink tabIndex={0} role="button" className="btn border-t-neutral-200 btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </NavLink>
                </div>
            </div>


            <div className="flex flex-col items-center text-center space-y-10 text w-3/5 mt-10 mb-56">
                <div className="font-semibold text-6xl text-white"> <h1>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1></div>
                <div> <p className="text-white text-base"> Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p></div>
                <div> <button className="btn text-[#9538E2] bg-white px-6 rounded-3xl text-lg"> Shop Now</button></div>
            </div>



        </div>

    );
};

export default Navbar;
