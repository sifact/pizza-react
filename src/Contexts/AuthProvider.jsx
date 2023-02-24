import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { setLogLevel } from "firebase/app";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google
    const googleProviderLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // sign up with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // log out
    const logOut = () => {
        return signOut(auth);
    };

    // update profile
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    // load user info from firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user observing");
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        googleProviderLogin,
        createUser,
        signIn,
        logOut,
        updateUser,
        user,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
