import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (info) => {
      setUser(info);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const userFunctions = {
    user,
    createUser,
  };
  return <AuthContext value={userFunctions}>{children}</AuthContext>;
};

export default AuthProvider;
