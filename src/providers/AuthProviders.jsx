import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const createUserByEmail = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUserByEmail =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {createUserByEmail,loginUserByEmail,};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children : PropTypes.node,
}

export default AuthProviders;