import { useState, useEffect } from "react";
import { getAllFavorites } from "../Utilities/storage";


const Wishlist = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        const favorites = getAllFavorites();
        setGadgets(favorites);
    }, []);

    return (
        <div className="container mx-auto max-w-screen-2xl mt-20">
            <h1 className="font-bold text-3xl">Wishlist</h1>
            <div className="font-bold text-3xl">
                {gadgets.map((gadget) => {
                    const {
                        product_id,
                        product_image,
                        product_title,
                        price,
                        description,
                        brand,
                        category
                    } = gadget;

                    return (
                        <div key={product_id} className="shadow-md flex flex-row items-center justify-between border rounded-xl mb-2 mt-5 w-full max-w-full p-5">
                            <div className="flex flex-row items-center gap-8 ">
                                <img src={product_image} alt={product_title} className="w-64 h-48 rounded-xl" />
                                <div className="space-y-2">
                                    <p className="font-bold text-3xl text-black">{product_title}</p>
                                    <p className="font-medium text-base text-gray-800">{description}</p>
                                    <p className="font-medium text-base text-gray-800"><span className="font-bold text-black">Brand: </span> {brand}</p>
                                    <p className="font-medium text-base text-gray-800"><span className="font-bold text-black" >Category: </span>{category}</p>
                                    <p className="font-medium text-base text-black">
                                        <span className="font-bold text-black">Price:</span> <i className="fa-solid fa-dollar-sign text-sm text-black"></i>{price}
                                    </p>
                                   
                                        <button className=" btn  bg-[#9538E2] text-white text-lg rounded-3xl px-6 hover:text-black">
                                            Add to Cart
                                        </button>
                                    
                                </div>

                                
                            
                            

                            </div>
                            <div className="p-4">
                                <button className="text-red-400 mr-4 -mt-4">
                                    <i className="fa-regular fa-circle-xmark text-4xl pb-40 "></i>
                                </button>
                            </div>

                        </div>
                    );
                })}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {gadgets.length === 0 ? (
                    <p className="text-center text-lg text-gray-500">No gadgets in your wishlist.</p>
                ) : (
                    gadgets.map(gadget => (
                        <Card key={gadget.product_id} gadget={gadget} />
                    ))
                )}
            </div> */}




        </div>
    );
};

export default Wishlist;
