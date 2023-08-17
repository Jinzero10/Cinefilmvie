/*import { createContext, useContext, useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const user = useSelector(selectUser);

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setDoc(
                    doc(db, "user", email),
                    {
                        myList: [],
                    },
                    console.log(email)
                );
            })
            .catch((error) => {
                alert(error.message);
            });
    }

   useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout);
            }
        });
        return () => {
            unSubscribe();
        };
    });

    return (
        <AuthContext.Provider value={{ signUp, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}
 */
