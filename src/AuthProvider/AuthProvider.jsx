import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)


    const register = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const ProfileUpdate  = (name,address)=>{
        setLoader(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            address: address
        })
    }

    const loginWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const loginWithGithub = ()=>{
        setLoader(true)
        return signInWithPopup(auth,githubProvider)
    }


    const login = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoader(false)
            console.log(currentUser)
            // console.log(currentUser.displayName)
            
            return()=>{
                UnSubscribe()
            }
        })

       
    },[])

    const authInfo = {
        register,
        login,
        logOut,
        user,
        loader,
        ProfileUpdate,
        loginWithGoogle,
        loginWithGithub
    }

  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider