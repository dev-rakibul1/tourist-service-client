import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./../firebase/firebase.Config";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // user email and password login system
  const userEmailPasswordLogin = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google system login
  const provider = new GoogleAuthProvider();
  const googleLoginSystem = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // log out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // sign with email and password
  const signEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   update profile
  // const updateUserProfile = (profile) => {
  //   setLoading(true);
  //   updateProfile(auth.currentUser, profile);
  // };

  // catch user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);

      return () => unSubscribe();
    });
  }, []);

  const authInfo = {
    user,
    userEmailPasswordLogin,
    googleLoginSystem,
    userLogOut,
    signEmailAndPass,
    // updateUserProfile,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
