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
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google system login
  const provider = new GoogleAuthProvider();
  const googleLoginSystem = () => {
    return signInWithPopup(auth, provider);
  };

  // log out
  const userLogOut = () => {
    return signOut(auth);
  };

  // sign with email and password
  const signEmailAndPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // catch user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);

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
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
