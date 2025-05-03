import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const confirmPassword = e.target.confirmPassword.value;
    createUser(email, password);
  };
  return (
    <div className="w-4/10 mx-auto mt-15">
      <form className="space-y-4" onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Display Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
