import NikonCard from './NikonCard';
import PropTypes from 'prop-types';

const NikonGrid = ({nikonProducts}) => {
    return (
        <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                nikonProducts.map(product => <NikonCard key={product._id} product={product}></NikonCard>)
            }
        </div>
    );
};

NikonGrid.propTypes = {
    nikonProducts: PropTypes.array
}
export default NikonGrid;