import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth_contexts";
import { auth } from "../firebase";
import firebase from "firebase/compat";
import { Router, useNavigate } from "react-router";

interface AuthProviderProps {
    children : ReactNode
}

export const AuthProvider = ({ children }:AuthProviderProps) => {

    const navigate = useNavigate();

    const [currentUser,setCurrentUser] = useState<firebase.User | null>(null);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            const nav = user ? null : navigate("/login");
            setCurrentUser(user);
        })

        return unsubscribe
    },[])

    return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
}