import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center my-3">
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Career</NavLink>
      </div>
      <div className="flex gap-5">
        <button>
          <img src="/src/assets/user.png" className="w-10" alt="" />
        </button>
        <button className="btn btn-secondary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
