import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
// import { useNavigate } from "react-router";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (info) => {
      setUser(info);
      console.log(info);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const googleSignIn = (provider) => {
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const userFunctions = {
    user,
    createUser,
    loginUser,
    logOut,
    googleSignIn,
  };

  return <AuthContext value={userFunctions}>{children}</AuthContext>;
};

export default AuthProvider;
