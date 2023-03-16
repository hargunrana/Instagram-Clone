import React, { useEffect, useState } from "react";
import { auth } from "../firebase.js";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
} from "firebase/auth";
export const AuthContext = React.createContext();

function AuthWrapper({ children }) {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    console.log("i am auth wrapper");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        setLoading(false);
    }, []);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logOut = () => {
        setUser("");
        signOut(auth);
    };
    const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const store = {
        login,
        logOut,
        user,
        forgotPassword,
        signUp,
    };

    return (
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthWrapper;
