import React,{createContext, useEffect, useState} from 'react';
import app from '../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {user,loader,setLoader,createUser, handleGoogle, login }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;