import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import { useState } from "react";

const Register = () => {

    const {createUser,profileUpdate,logOut} = useAuth()
    const [errorMessage, setErrorMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name= form.name.value
        const email= form.email.value
        const password= form.password.value
        const image= form.image.value
        console.log(name,email, password,image);
        
        setErrorMessage("")

        if (password.length<6) {
            return setErrorMessage("Password Must be at least 6 character")
        }
        if(!/[A-Z]/.test(password)) {
            return setErrorMessage("Provide at least one Uppercase")
        }
        if(!/[\W_]/.test(password)) {
            return setErrorMessage("Provide at least one Special Character")
        }

        createUser(email,password)
        .then(res => {
            profileUpdate(name, image)
            .then(res => {
                console.log(res.user)
                setSuccessMessage("User updated successfully")
                return
            })
            .catch(err => {
                console.error(err);
                setErrorMessage("User updated is not successfully")
                return
            })
            logOut()
            .then(res=> res.user)
            .catch(err => console.error(err))
            console.log(res.user)
            setSuccessMessage("User Created successfully")
            e.target.reset()
            navigate("/login")
            return
        })
        .catch(err => {
            console.error(err)
            setErrorMessage("User created is not successful")
            return
        })


        
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card w-full max-w-4xl shadow-2xl bg-base-100">
                        <h2 className="text-4xl px-8 pt-8 font-semibold">Register your account</h2>
                        <form onSubmit={handleRegister}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="image" placeholder=" Enter Your photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email" name="email" placeholder="Enter Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password" name="password" placeholder="Enter Your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <div className="flex items-start">
                                    <div className="flex items-start gap-2">
                                        <div className="flex items-center h-5">
                                            <input name="checkbox" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>
                                        <label >Please Accept Our <Link className="hover:underline text-accent">Terms & Conditions</Link> </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-green-500">{successMessage}</p>
                                <p className="text-red-500">{errorMessage}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                            <div className="form-control mt-2">
                                <p >Already have an account ? Please <Link to='/login' className="hover:underline text-accent">Login</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;