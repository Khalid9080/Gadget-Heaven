import toast from "react-hot-toast";

// Get all gadgets from cart
const getAllCartItems = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

// Get all gadgets from wishlist
const getAllFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};

// Add gadget to cart
const addToCart = (gadget) => {
    const cart = getAllCartItems();
    const isExist = cart.find(item => item.product_id === gadget.product_id);
    if (isExist) {
        toast.error('This gadget is already in your Cart!');
        return;
    }

    cart.push(gadget);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Gadget added to Cart!');
};

// Add gadget to wishlist
const addFavorite = (gadget) => {
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.product_id === gadget.product_id);
    if (isExist) {
        toast.error('This gadget is already in your Wishlist!');
        return;
    }

    favorites.push(gadget);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Gadget added to Wishlist!');
};

// Remove gadget from cart
const removeFromCart = (product_id) => {
    const cart = getAllCartItems(); // Retrieve current cart items from localStorage

    // If there are no items in the cart, do nothing
    if (!cart || cart.length === 0) return;

    // Filter out the item with the given product_id
    const updatedCart = cart.filter(item => item.product_id !== product_id);

    // Update localStorage with the new cart array
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Show a success toast
    toast.success('Gadget removed from Cart!');
};

export { addToCart, addFavorite, getAllCartItems, getAllFavorites, removeFromCart };
