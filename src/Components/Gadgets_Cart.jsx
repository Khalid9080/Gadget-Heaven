import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const Gadgets_Cart = () => {
    const allProductdata = useLoaderData();
    const { category } = useParams();
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if (category) {
            // Filter products by category if a category is selected
            const filteredGadgetsCategory = allProductdata.filter(gadget => gadget.category === category);
            setGadgets(filteredGadgetsCategory);
        } else {
            // Show all products if no category is selected
            setGadgets(allProductdata);
        }
    }, [category, allProductdata]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)}
        </div>
    );
};

Gadgets_Cart.propTypes = {
    category: PropTypes.array,
    gadgets: PropTypes.array,
};

export default Gadgets_Cart;
