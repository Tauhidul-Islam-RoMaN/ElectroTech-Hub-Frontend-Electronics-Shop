import { createContext } from "react";
import PropTypes from 'prop-types';


export const MyCreatedContext = createContext()
const ApiContext = ({children}) => {

const authInfo = {

}

    return (
        <MyCreatedContext.Provider value={authInfo}>
            {children}
        </MyCreatedContext.Provider >
    );
};

ApiContext.propTypes ={
    children: PropTypes.node
}
export default ApiContext;