import { NavLink } from "react-router-dom";
import useAuth from "./Provider/useAuth";
import auth from "./Firebase/Firebase.config";
const Navbar = () => {

    const { user, logOut } = useAuth()
    const handleLogout=()=>{
        logOut(auth)
        .then(res => 
            console.log(res))
        .catch(err => {
            console.error(err);
        })
    }
    const navLinks =
            <>
            <li> <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn btn-accent text-white " : ""}>Home</NavLink></li>
            <li> <NavLink to="/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn btn-accent text-white " : ""}>My Cart</NavLink></li>
            <li> <NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn btn-accent text-white " : ""}>Add Product</NavLink></li>
            <li> <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn btn-accent text-white " : ""}> {user ?<button onClick={handleLogout} >Logout</button>
 : "Login"} </NavLink></li>
        </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex justify-center mx-auto items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" text-xl menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">ElectroTech Hub</a>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="p-4 flex items-center gap-10">
                        {navLinks}
                    </ul>
                </div>
                {
                    user ?
                        <div className="flex items-center gap-5">
                            <div><img className="w-20 rounded-full" src={user?.photoURL} /></div>
                            <p className="text-xs md:text-base">{user?.displayName} </p>
                        </div>
                        : ""
                }
            </div>
        </div>
    );
};

export default Navbar;