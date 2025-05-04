import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  if (user && user?.email) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }
};

export default PrivateRoute;
