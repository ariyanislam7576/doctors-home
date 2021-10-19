import { getAuth, signOut ,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../Firebase/Firease.init";

initApp()
const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider()

    const GoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUsers(result.user)
            })

    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleRegister = e => {
        console.log(e.target.value);
        createUserWithEmailAndPassword(auth ,email ,password)
        .then(result => {
            const user = result.user
        })
    }

    useEffect(() => {
    const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUsers(user)  
            }
            else{
                setUsers({})
            }
        });
        return () => unsubscribed
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }



    return {
        users,
        logOut,
        GoogleSignIn,
        handleEmail,
        handlePassword,
        handleRegister
    }
}

export default useFirebase;