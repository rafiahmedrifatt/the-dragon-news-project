import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
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
        {user ? (
          <button onClick={handleLogOut} className="btn btn-secondary">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
