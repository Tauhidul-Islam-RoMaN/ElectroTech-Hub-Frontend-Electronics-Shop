import SonyCard from './SonyCard';
import PropTypes from 'prop-types';

const SonyGrid = ({sonyProducts}) => {
    return (
        <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                sonyProducts.map(product => <SonyCard key={product._id} product={product}></SonyCard>)
            }
        </div>
    );
};

SonyGrid.propTypes = {
    sonyProducts: PropTypes.array
}
export default SonyGrid;