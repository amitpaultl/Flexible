import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword, signInWithRedirect, sendPasswordResetEmail,  } from "firebase/auth";
import app from '../Firebase/Firebase.init'
import HomeLoading from '../Utility/Loading/HomeLoading/HomeLoading';
export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    // loading
    const [loading, setLoading] = useState(false)

    // user
    const [user, setUser] = useState(null)


    const googleProvider = new GoogleAuthProvider();

    //1 google provider
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // 4 const sing in google 
    const googleSingIn = () =>{
        setLoading(true)
        return signInWithRedirect(auth,googleProvider)
    } 

    // 3 email singUp
    const emailSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 4 signInWithEmailAndPassword
    const singInEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // reset password 
    const resetPassword = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // user profile update
    const userProfileUpdate = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    // logOut
    const logOut = () => {
        signOut(auth)
    }


    useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            //this part will execute once the component is unmounted.
            unsubscribe()
        }
    }, [])

    // context value
    const authInfo = { signInWithGoogle, user, emailSignUp, logOut, loading, setLoading, userProfileUpdate,userProfileUpdate,singInEmail,googleSingIn,resetPassword }
    return (
        <div>
            <AuthProvider.Provider value={authInfo} >
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;