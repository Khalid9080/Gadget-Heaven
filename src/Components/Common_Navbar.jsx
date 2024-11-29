
import { NavLink } from "react-router-dom";

const Common_Navbar = () => {
    return (

        <div className="flex flex-col">
            <div className="navbar text-primary-content  w-full flex flex-col bg-[#F7F7F7]">
                <div className="flex justify-evenly items-center w-full px-4 space-x-96 my-5  ">
                    {/* Logo */}
                    <div>
                        <button className=" font-bold text-3xl text-black">Gadget Heaven</button>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-black flex space-x-4 ">
                        <NavLink to='/' className="btn btn-ghost text-base">Home</NavLink >
                        <NavLink to='/statistics' className="btn btn-ghost text-base">Statistics</NavLink >
                        <NavLink to='/dashboard' className="btn btn-ghost text-base">Dashboard</NavLink >
                        <NavLink to='/about' className="btn btn-ghost text-base">About Us</NavLink >
                    </div>

                    {/* Icon Buttons */}
                    <div className="flex space-x-5">
                        <div tabIndex={0} role="button" className="btn border-t-neutral-200 btn-circle">
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
                        </div>
                        <div tabIndex={0} role="button" className="btn border-t-neutral-200 btn-circle">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#9538E2] py-10  space-y-4 text-center items-center flex flex-col -mt-0 pb-56">
                <h1 className="font-bold text-3xl text-white">Our Mission</h1>
                <div><p className="text-white container mx-auto">Gadget Heaven was born out of a passion for the latest technology and a desire to make it accessible to everyone. Our journey began in a small garage where a group of tech enthusiasts came together to share their love for gadgets. With a vision to create a one-stop shop for all tech needs, we started curating the best and most innovative products from around the world. Today, Gadget Heaven is a thriving e-commerce business, dedicated to providing our customers with the latest gadgets at competitive prices, along with exceptional customer service. Join us on this exciting journey and discover the future of technology with Gadget Heaven.
                    Our mission is to empower people through technology, offering a wide range of gadgets that cater to different needs and preferences. From the latest smartphones and laptops to smart home devices and wearable tech, we have something for everyone. We believe in the power of technology to transform lives and are committed to bringing you the best products that enhance your everyday experiences. Thank you for choosing Gadget Heaven as your trusted tech partner.
                    We are constantly on the lookout for the latest trends and innovations in the tech world, ensuring that our inventory is always up-to-date with the newest gadgets. Our team of experts rigorously tests each product to ensure it meets our high standards of quality and performance. We also provide detailed product descriptions and reviews to help you make informed decisions.

                    At Gadget Heaven, customer satisfaction is our top priority. We offer fast and reliable shipping, easy returns, and a dedicated customer support team ready to assist you with any queries. Our secure online platform ensures that your personal information is always protected, giving you peace of mind while shopping with us.

                    Join our community of tech enthusiasts and stay connected with us through our blog and social media channels. Here, you will find the latest news, tips, and reviews on the hottest gadgets. Whether you are a tech novice or a seasoned pro, Gadget Heaven is your ultimate destination for all things tech. Thank you for being a part of our story, and we look forward to serving you with the best in technology.</p></div>

            </div>

        </div>


    );
};

export default Common_Navbar;