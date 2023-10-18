import CanonCard from './CanonCard';
import PropTypes from 'prop-types';

const CanonGrid = ({canonProducts}) => {
    return (
        <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                canonProducts.map(product => <CanonCard key={product._id} product={product}></CanonCard>)
            }
        </div>
    );
};

CanonGrid.propTypes = {
    canonProducts: PropTypes.array
}
export default CanonGrid;