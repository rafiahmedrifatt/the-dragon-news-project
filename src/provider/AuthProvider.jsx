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
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (info) => {
      setUser(info);
      console.log(info);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const loginUser = (email, password) => {
    setLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const googleSignIn = (provider) => {
    setLoader(true);
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoader(true);
    signOut(auth);
  };

  const userFunctions = {
    user,
    loader,
    createUser,
    loginUser,
    logOut,
    googleSignIn,
  };

  return <AuthContext value={userFunctions}>{children}</AuthContext>;
};

export default AuthProvider;
