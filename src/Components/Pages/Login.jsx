import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import { useState } from "react";

const Login = () => {

    const {login, googleLogin} = useAuth()

    const [successMessage, setSuccessMessage] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const handleGoogleLogin= ()=> {
        googleLogin()
        .then(res => {
            console.log(res.user);
        })
        .catch(err => {
            console.error(err);
        })
    }

    const handleLogin = (e) => {

        setErrorMessage("")
        e.preventDefault()
        const form = e.target
        const password= form.password.value
        const email= form.email.value
        console.log(password,email);

        login(email,password)
        .then(res => {
            console.log(res.user);
            setSuccessMessage("Login successful")
            return
        })
        .catch(err => {
            console.error(err);
            return setErrorMessage(err.Message)
        })

        

        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content relative ">
                {/* <div className="border-solid border-4 rounded-2xl py-[262px] px-[110px] absolute before:  border-accent">
                </div> */}
                <div className="card w-full max-w-4xl z-10 shadow-2xl bg-base-100">
                    <h2 className="text-4xl px-8 pt-8 font-semibold">Login your account</h2>
                    <form onSubmit={handleLogin}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="Enter Your email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="flex justify-end items-end gap-2">
                                <Link className="hover:underline text-accent text-sm">Forget Password?</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-green-500">{successMessage}</p>
                            <p className="text-red-500">{errorMessage}</p>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-accent">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <p >New to the Website ? Please <Link to='/register' className="hover:underline text-accent">Register</Link> </p>
                        </div>
                    </form>
                    <div className="divider md:mx-8 -mt-4"> Or </div>
                    <div className="flex items-center justify-center mb-8 ">
                        <button onClick={handleGoogleLogin} className="btn btn-outline md:text-xl gap-4 ">
                            <FcGoogle></FcGoogle>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;