import { useLoaderData } from 'react-router-dom';
import AppleProductDetails from './AppleProductDetails';

const SingleAppleGrid = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);


    return (
        <div className="mx-10">
            {
                <AppleProductDetails key={loadedData._id} appleProducts={loadedData} ></AppleProductDetails>
            }
        </div>
    );
};

export default SingleAppleGrid;