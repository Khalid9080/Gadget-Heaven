import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Categories = ({categories}) => {
    return (
        <div className="mb-20 shadow-lg bg-white w-80 rounded-2xl">
            <div className="flex flex-col space-y-7 p-10 rounded-2xl">
                {/* All Products link with active style */}
                <NavLink 
                    to="/all-products" 
                    className={({ isActive }) => 
                        `btn rounded-full btn-lg px-20 text-nowrap text-xl ${isActive ? 'bg-[#9538E2] text-white' : 'text-[#09080F99]'}`
                    }
                >
                    All Products
                </NavLink>
                
                {/* Other categories with active style */}
                {categories.map(category => (
                    <NavLink 
                        key={category.category} 
                        to={`/category/${category.category}`} 
                        className={({ isActive }) => 
                            `btn rounded-full btn-lg px-20 text-nowrap text-xl ${isActive ? 'bg-[#9538E2] text-white' : 'text-[#09080F99]'}`
                        }
                    >
                        {category.category}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
