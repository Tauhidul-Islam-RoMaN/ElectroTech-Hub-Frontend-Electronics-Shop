import GoogleCard from "./GoogleCard";

const Google = ({googleProducts}) => {
    return (
        <div>
            <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    googleProducts.map(product => <GoogleCard key={product._id} product={product}></GoogleCard>)
                }
            </div>
        </div>
    );
};

export default Google;