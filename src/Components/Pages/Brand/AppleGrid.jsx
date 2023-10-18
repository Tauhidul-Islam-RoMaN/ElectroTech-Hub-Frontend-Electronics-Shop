import AppleCard from './AppleCard';
import PropTypes from 'prop-types';

const AppleGrid = ({appleProducts}) => {
    return (
        <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                appleProducts.map(product => <AppleCard key={product._id} product={product}></AppleCard>)
            }
        </div>
    );
};

AppleGrid.propTypes = {
    appleProducts: PropTypes.object
}
export default AppleGrid;