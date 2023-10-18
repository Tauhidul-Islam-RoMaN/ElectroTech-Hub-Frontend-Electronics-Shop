import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { name, img } = brand
    return (
        <Link to={`/${name}`}>
            <div>
                <p className="text-center text-xl font-bold"> {name} </p>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-80" src={img} alt="Brand" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
            </div>
        </Link>

    );
};

Brand.propTypes = {
    brand: PropTypes.object
}

export default Brand;