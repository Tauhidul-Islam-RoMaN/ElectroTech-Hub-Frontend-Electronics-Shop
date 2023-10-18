import useAuth from "./useAuth";

const PrivateRoute = ({children}) => {
    const {user} = useAuth()

    if (user) {
        return children;
    }
}
    
        

export default PrivateRoute;