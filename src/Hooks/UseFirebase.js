import { getAuth, signOut ,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../Firebase/Firease.init";

initApp()
const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [isLoading,setIsLoading] = useState(true)

    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider()

    const GoogleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUsers(result.user)
            })

            .finally(()=> setIsLoading(false))

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
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    useEffect(() => {
    const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUsers(user)  
            }
            else{
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(()=>(false))
    }



    return {
        users,
        logOut,
        GoogleSignIn,
        handleEmail,
        handlePassword,
        handleRegister,
        isLoading
    }
}

export default useFirebase;