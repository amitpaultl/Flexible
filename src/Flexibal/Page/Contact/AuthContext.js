import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.init'
export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {

    // context value
    const authInfo = {}
    return (
        <div>
            <AuthProvider.Provider value={authInfo} >
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;