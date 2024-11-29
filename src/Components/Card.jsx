
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Card = ({ gadget }) => {
    const {product_id, product_image, product_title, price } = gadget || {};
    return (
        
            <div className="bg-base-100 shadow-lg w-96 rounded-2xl">
                <figure className="p-8">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl object-fill w-[25rem] h-[16rem]" />
                </figure>
                <div className="card-body -mt-8">
                    <h2 className="card-title text-2xl">{product_title}</h2>
                    <p className='text-xl text-gray-500'>Price: { price}K</p>
                    <div className="card-actions mt-2">
                        <NavLink to={`/gadget-details/${product_id}`} className=" btn btn-outline rounded-badge text-[#9538E2] outline-[#9538E2] text-base hover:bg-white hover:text-[#9538E2] ">View Details</NavLink>
                    </div>
                </div>
            </div>
        
    );
};

Card.propTypes = {
    gadget: PropTypes.object.isRequired
}
export default Card;