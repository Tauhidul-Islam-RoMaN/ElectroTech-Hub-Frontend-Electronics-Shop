import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { name, photo } = brand
    return (
        <Link to={`/${name}`}>
            <div>
                <p className="text-center text-xl mb-5 font-bold"> {name} </p>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-80 h-64" src={photo} alt="Brand" /></figure>
                </div>
            </div>
        </Link>

    );
};

Brand.propTypes = {
    brand: PropTypes.object
}

export default Brand;