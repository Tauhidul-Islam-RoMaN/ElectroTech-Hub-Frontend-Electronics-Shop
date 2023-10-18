import GoogleCard from './GoogleCard';
import PropTypes from 'prop-types';

const GoogleGrid = ({googleProducts}) => {
    return (
        <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                googleProducts.map(product1 => <GoogleCard key={product1._id} product1={product1}></GoogleCard>)
            }
        </div>
    );
};

GoogleGrid.propTypes = {
    googleProducts: PropTypes.array
}
export default GoogleGrid;