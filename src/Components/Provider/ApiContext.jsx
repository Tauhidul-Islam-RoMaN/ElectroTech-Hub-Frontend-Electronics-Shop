import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const MyCreatedContext = createContext()

const ApiContext = ({children}) => {
    const [user, setUser]= useState()


    const googleProvider = new GoogleAuthProvider()

    const googleLogin= () => {
        return signInWithPopup(auth, googleProvider)
    }

   const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const profileUpdate= (name,image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut =() => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,(user) =>{
            setUser(user)
            console.log(user);

        })
        return () => unsubscribe()
    },[])



const authInfo = {
    createUser,
    login,
    logOut,
    profileUpdate,
    user,
    googleLogin
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