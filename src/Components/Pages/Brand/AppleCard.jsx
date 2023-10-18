import { Link } from "react-router-dom";

const AppleCard = ({ product }) => {
    const { brand, description, name, photo, price, rating, type, _id } = product
    return (

        

        <>
            {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-t-lg" src={photo} alt="" />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Product Name: <span className="font-normal">{name}</span></h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Brand: <span className="font-normal">{brand}</span></h5>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Product Type: <span className="font-normal">{type} Tk </span> </p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Price: <span className="font-normal">{price} Tk </span> </p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Rating: <span className="font-normal">{rating}</span> </p>
                    <Link to={`${name}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg">
                        Details
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div> */}

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
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">Tk {price}</span>
                        <Link to={`updateProduct/${name}`} ><button className="btn text-white btn-accent">Update</button></Link>
                        <Link to={`${name}`}><button className="btn text-white btn-accent">Details</button></Link>
                    </div>
                </div>
            </div>

        </>

    );
};

export default AppleCard;