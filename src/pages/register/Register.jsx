import React from "react";

const Register = () => {
  return (
    <div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Display Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
