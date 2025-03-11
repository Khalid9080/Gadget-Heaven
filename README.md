# GadgetHeaven

🚀 **Live Project:** [GadgetHeaven](https://khalid-gadget-heaven.netlify.app)

GadgetHeaven is an online eCommerce platform where users can purchase a wide range of digital accessories, including watches, power banks, mobile devices, laptops, chargers, PCs, and more.

---

## 📌 Overview
GadgetHeaven is a modern, responsive, and user-friendly eCommerce platform that provides customers with an easy way to explore and purchase digital gadgets. The platform features an intuitive UI, seamless navigation, and efficient cart & wishlist management.

---

## 🎯 Features
✅ **User-Friendly Interface** – A sleek and responsive design for a seamless shopping experience.  
✅ **Add to Cart & Wishlist** – Users can add gadgets to their cart or wishlist effortlessly.  
✅ **Local Storage Integration** – Cart and wishlist data persist using `localStorage`.  
✅ **Product Details** – Each product has a dedicated details page with specifications.  
✅ **Sorting & Filtering** – Users can sort gadgets by price and other attributes.  
✅ **Secure & Fast** – The platform ensures a smooth and efficient user experience.  

---

## 🛠️ Technologies Used
- **React.js** – Frontend framework for building interactive UI components.
- **React Router DOM** – Enables navigation and routing within the application.
- **Tailwind CSS** – A utility-first CSS framework for styling.
- **React Hot Toast** – Provides notifications for actions like adding items to the cart.
- **Local Storage API** – Stores cart and wishlist data locally.
- **Netlify** – Deployment platform for hosting the application.

---

## 🚀 Getting Started
Follow these steps to set up the project locally:

### 📥 Installation
```sh
# Clone the repository
git clone https://github.com/yourusername/GadgetHeaven.git

# Navigate to the project directory
cd GadgetHeaven

# Install dependencies
npm install
```

### ▶️ Running the Application
```sh
npm run dev
```
The application will be available at `http://localhost:5173/`.

---

## 🔧 Project Structure
```
GadgetHeaven/
│── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── GadgetDetails.jsx
│   │   ├── Cart.jsx
│   ├── Utilities/
│   │   ├── storage.js
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── tailwind.config.js
│── vite.config.js
│── README.md
```

---

## 📌 Key Functions
```javascript
// Get all gadgets from cart
const getAllCartItems = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
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

// Remove gadget from cart
const removeFromCart = (product_id) => {
    const cart = getAllCartItems();
    const updatedCart = cart.filter(item => item.product_id !== product_id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Gadget removed from Cart!');
};
```

---

## 🏆 Contributions
Contributions, issues, and feature requests are welcome!

### 📬 How to Contribute
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Submit a Pull Request

---

## 📄 License
This project is licensed under the **MIT License**.

**© 2025 GadgetHeaven. All Rights Reserved.**
