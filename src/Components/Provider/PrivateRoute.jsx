import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location =useLocation()

    if (loading) {
        return (<>
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-4xl text-accent"></span>
                <span className="loading loading-spinner text-4xl text-accent"></span>
                <span className="loading loading-spinner text-4xl text-accent"></span>
                <span className="loading loading-spinner text-4xl text-accent"></span>
            </div>
        </>
        )

    }

    if (user) {
        return children;
    }

    return <Navigate
    state={location.pathname}
        to='/login'></Navigate>
}

PrivateRoute.propTypes = {
    children: PropTypes.object,
}

export default PrivateRoute;