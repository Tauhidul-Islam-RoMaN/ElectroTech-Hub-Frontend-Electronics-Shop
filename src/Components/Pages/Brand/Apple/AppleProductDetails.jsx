import PropTypes from 'prop-types';
import useAuth from '../../../Provider/useAuth';
import Swal from 'sweetalert2';

const AppleProductDetails = ({ appleProducts }) => {

    const { brand, name, photo, price, description, rating, type } = appleProducts

    const { user } = useAuth()

    const handleAddToCart = () => { 

        const email = user?.email

        const data = {email,brand, name, photo, price, description, rating, type }

        fetch('https://assignment-10-server-ten-tan.vercel.app/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Product added to your cart!',
                        'success'
                      )
                }
            });
    };

    return (
        <>
            <div className="w-full max-w-3xl my-16 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg" src={photo} alt="product image" />
                <div className="px-5 pb-5">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">{brand}</h5>
                        </div>
                        <div>
                            <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">{type}</h5>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                            </div>
                        </div>
                    </div>

                    <div className='mb-5'>
                        <p> {description} </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">Tk {price}</span>
                        <button onClick={handleAddToCart} className="btn text-white btn-accent">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};
AppleProductDetails.propTypes = {
    appleProducts: PropTypes.object
}
export default AppleProductDetails;