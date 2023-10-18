import SamsungCard from './SamsungCard';
import PropTypes from 'prop-types';

const SamsungGrid = ({samsungProducts}) => {
    return (
        <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                samsungProducts.map(product => <SamsungCard key={product._id} product={product}></SamsungCard>)
            }
        </div>
    );
};

SamsungGrid.propTypes = {
    samsungProducts: PropTypes.array
}
export default SamsungGrid;