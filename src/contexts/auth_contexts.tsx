import firebase from "firebase/compat";
import React, { useContext } from "react";

export const AuthContext = React.createContext<firebase.User | null>(null);

export function useAuth () {
    return useContext(AuthContext);
}