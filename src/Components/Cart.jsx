import { useState, useEffect } from "react";
import { getAllCartItems, removeFromCart } from "../Utilities/storage"; // Import removeFromCart

const Cart = () => {
    const [gadgets, setGadgets] = useState([]);
    const [totalCost, setTotalCost] = useState(0); // State for total cost
    const [isSortedDescending, setIsSortedDescending] = useState(false); // State to manage the sorting order

    useEffect(() => {
        // Fetch the cart items from localStorage or wherever they are stored
        const cartItems = getAllCartItems();
        setGadgets(cartItems);  // Update the state with fetched items

        // Calculate the total cost of the cart items
        const total = cartItems.reduce((acc, gadget) => acc + parseFloat(gadget.price), 0);
        setTotalCost(total);  // Set the total cost
    }, []);

    // Handle removing an item from the cart
    const handleRemoveFromCart = (product_id, price) => {
        // Remove the item from the cart in localStorage
        removeFromCart(product_id);

        // Update the gadgets state to reflect the changes
        const updatedCart = gadgets.filter(gadget => gadget.product_id !== product_id);
        setGadgets(updatedCart);

        // Update the total cost (subtract the price of the removed item)
        setTotalCost(prevTotal => prevTotal - parseFloat(price));
    };

    // Handle sorting by price in descending order
    const handleSortByPrice = () => {
        const sortedGadgets = [...gadgets].sort((a, b) => {
            if (isSortedDescending) {
                return parseFloat(a.price) - parseFloat(b.price); // Ascending order
            } else {
                return parseFloat(b.price) - parseFloat(a.price); // Descending order
            }
        });

        setGadgets(sortedGadgets);
        setIsSortedDescending(!isSortedDescending); // Toggle sorting order
    };

    return (
        <div className="container mx-auto max-w-screen-2xl mt-20">
            {/* Header Section */}
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold text-3xl">Cart</h1>

                <div className="flex flex-row items-center space-x-8">
                    <h1 className="font-bold text-3xl">
                        Total Cost: <i className="fa-solid fa-dollar-sign"></i>{totalCost.toFixed(2)}
                    </h1>

                    {/* Sort Button */}
                    <div>
                        <button 
                            onClick={handleSortByPrice} 
                            className="btn px-6 text-lg items-center space-x-2 border border-purple-500 text-purple-500 font-semibold rounded-full hover:bg-purple-100 transition"
                        >
                            Sort by Price
                            <i className="fa-solid fa-sliders rotate-90"></i>
                        </button>
                    </div>

                    {/* Purchase Button */}
                    <div>
                        <button className="btn px-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full hover:shadow-lg">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

            {/* Cart Items List */}
            <div className="flex flex-col space-y-8 mb-20">
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
                            <div className="flex flex-row items-center gap-6">
                                <img src={product_image} alt={product_title} className="w-64 h-48 rounded-xl" />
                                <div className="space-y-2">
                                    <p className="font-bold text-3xl text-black">{product_title}</p>
                                    <p className="font-medium text-base text-gray-800">{description}</p>
                                    <p className="font-medium text-base text-gray-800"><span className="font-bold text-black">Brand: </span> {brand}</p>
                                    <p className="font-medium text-base text-gray-800"><span className="font-bold text-black" >Category: </span>{category}</p>
                                    <p className="font-medium text-base text-black">
                                        <span className="font-bold text-black">Price:</span> <i className="fa-solid fa-dollar-sign text-sm text-black"></i>{price}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4">
                                <button onClick={() => handleRemoveFromCart(product_id, price)} className="text-red-400 mr-4 -mt-4">
                                    <i className="fa-regular fa-circle-xmark text-4xl pb-24 "></i>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;
