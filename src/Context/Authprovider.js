import React, { createContext } from 'react';
import useFirebase from '../Hooks/UseFirebase';

 export const AuthContext = createContext()

const Authprovider = ({children}) => {
    const myContexts = useFirebase()
    return (
        <AuthContext.Provider value={myContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;