import { useState } from "react";
import Cart from "./Cart";
import PropTypes from 'prop-types';


const MyCartGrid = ({ userCarts }) => {

    const [updatedCarts, setUpdatedCarts] = useState(userCarts)

    
    return (

        <div className="grid grid-col-1 gap-10 my-20 md:grid-cols-2 lg:grid-cols-3">
            {
                userCarts.map(product => <Cart key={product._id} product={product} updatedCarts={updatedCarts} setUpdatedCarts={setUpdatedCarts}></Cart>)
            }
        </div>

    );
};
MyCartGrid.propTypes = {
    userCarts: PropTypes.array
}
export default MyCartGrid;