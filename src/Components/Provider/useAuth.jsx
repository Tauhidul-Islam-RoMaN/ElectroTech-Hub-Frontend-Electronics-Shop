import { useContext } from "react";
import { MyCreatedContext } from "./ApiContext";

const useAuth = () => {
    const customHook = useContext(MyCreatedContext)
    return customHook
};

export default useAuth;