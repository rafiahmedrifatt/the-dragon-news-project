import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <img src="/src/assets/logo.png" alt="" />
      <p className="text-lg font-bold my-2 text-gray-400">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg">{format(new Date(), "EEEE, LLLL MM, yyyy")}</p>
    </div>
  );
};

export default Header;
