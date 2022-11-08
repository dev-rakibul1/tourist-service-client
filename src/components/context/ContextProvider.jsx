import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./../firebase/firebase.Config";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userEmailPasswordLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // catch user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);

      return () => unSubscribe();
    });
  }, []);

  const authInfo = { user, userEmailPasswordLogin };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
