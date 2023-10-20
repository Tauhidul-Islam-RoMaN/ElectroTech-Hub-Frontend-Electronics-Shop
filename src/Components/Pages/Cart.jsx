import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Cart = ({ product, updatedCarts, setUserCarts }) => {
    const { brand, name, photo, price, description, _id, rating, type } = product
    // console.log(Array.isArray(updatedCarts),updatedCarts);
    console.log(updatedCarts);

    const handleDelete = (id) => {
console.log("hello");
        fetch(`https://assignment-10-server-8fuf37gsv-romans-projects-caf8547b.vercel.app/cart/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire(
                    'Deleted!',
                    'Your Product from cart has been deleted.',
                    'success'
                )
                const remaining = updatedCarts.filter(item => item._id != id)
                setUserCarts(remaining)
                console.log(remaining);
                // if (data?.deletedCount > 0) {

                // }

            });


    }
    return (

        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="p-8 rounded-t-lg" src={photo} alt="product image" />
                <div className="px-5 pb-5">

                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">{brand}</h5>
                    <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">{type}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                    </div>
                    <div className="mb-4">
                        {
                            description.length > 100 ? description.slice(0, 100) + "..." : description
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">Tk {price}</span>
                        <button className='btn btn-accent' onClick={() => handleDelete(_id)} >Delete</button>
                    </div>
                </div>
            </div>

        </>
    );
};

Cart.propTypes = {
    product: PropTypes.object,
    updatedCarts: PropTypes.array,
    setUserCarts: PropTypes.func
}

export default Cart;