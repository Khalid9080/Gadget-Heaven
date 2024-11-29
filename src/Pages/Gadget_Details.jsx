
import { useParams, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import { addFavorite,addToCart} from '../Utilities/storage';
import { Toaster } from 'react-hot-toast';



const Gadget_Details = () => {
    const { product_id } = useParams();
    const productDetailData = useLoaderData();
    const id = parseInt(product_id);

    // console.log(typeof product_id,typeof id, typeof productDetailData[0]. product_id);
    // console.log(typeof(productDetailData));

    const gadget = productDetailData.find(gadget => gadget.product_id === id);

    const { product_id: current_product_id, product_image, product_title, price, description, Specification, availability, rating } = gadget

       // Handle add to cart
       const handleAddToCart = (gadget) => {
        addToCart(gadget);
    };

    // Handle add to wishlist
    const handleAddToWishlist = (gadget) => {
        addFavorite(gadget);
    };


    return (
        <div >

            <div className='bg-[#F7F7F7] font'>


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
                        <h1 className="font-bold text-3xl text-white">Product Details</h1>
                        <div><p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p></div>
                    </div>

                </div>


                {/* Gadget Details  Start ------ */}


                <div className="relative -top-48 mx-auto w-[66.38rem] h-[34rem] shadow-xl">
                    <div className=" bg-white rounded-2xl p-6 gap-7 flex">
                        <img src={product_image} className="rounded-lg border shadow-sm w-[26.52rem] h-[31.44rem] object-fil " />
                        <div className="h-[31.44rem] space-y-3">
                            <h1 className='font-bold text-3xl'>{product_title}</h1>
                            <h3 className='text-[#09080FCC] font-bold text-2xl'>Price: <i className="fa-solid fa-dollar-sign"></i>{price}</h3>

                            <h3 className={`btn btn-sm rounded-3xl ${availability ? "bg-[#309C081A] border-[#309C08] text-[#309C08]" : "bg-red-100 border-red-500 text-red-600"}`}>
                                {availability ? "In Stock" : "Out of Stock"}
                            </h3>

                            <h3 className='text-[#09080F99] font-semibold text-lg'>{description}</h3>

                            <h3 className='font-bold text-lg'> Specification :</h3>
                            <ol className="list-decimal pl-5 space-y-1 text-[#09080F99] font-semibold text-base">
                                {Specification.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>

                            <div className='space-y-2 '>
                                <h3 className='text-lg font-bold'>Rating :</h3>
                                <div className='flex gap-2 items-center'>
                                    <div className="rating rating-md">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-7"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <h3 className='btn btn-sm rounded-3xl'>{rating}</h3>


                                </div>
                            </div>



                            <div className='flex items-center gap-4 '>
                                {/* Add to Cart Button */}
                                <button onClick={() => handleAddToCart(gadget)} className=" btn bg-[#9538E2] text-white text-lg rounded-3xl px-6 hover:text-black">
                                    Add to Cart
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>

                                {/* Add to Wishlist Button */}
                                <button onClick={() => handleAddToWishlist(gadget)} className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            <Toaster />
                        </div>
                    </div>
                </div>




            </div>


            <Footer></Footer>
        </div>

    );
};

{/* Navbar Start-- */ }


{/* Navbar End-- */ }



//Rating----

















{/* <svg
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
                        </svg> */}
export default Gadget_Details;