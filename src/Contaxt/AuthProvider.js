import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContex = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [dark, setDark] = useState(false)


    const googleSingup = (provider) =>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
    }


    const createRegistar = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =(email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }


    const profileUpdate =(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = ()=>{
       
       return signOut(auth)
    }


    const singInGithub=(providerGit)=>{
        setLoading(true)
       return signInWithPopup(auth, providerGit)
    }
    




    useEffect(()=>{
      const unsubscrib =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unsubscrib()
    }, [])




    const authInfo = { user, singInGithub, setDark, dark, loading, logOut, googleSingup, createRegistar, login, profileUpdate }
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;