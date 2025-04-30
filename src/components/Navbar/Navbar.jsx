import { format } from "date-fns";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <img src="/src/assets/logo.png" alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, LLLL MM, yyyy")}</p>
    </div>
  );
};

export default Navbar;
