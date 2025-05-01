import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1>Find Us On</h1>
      <div className="p-4">
        <div className="flex gap-2 text-xl items-center border border-gray-200 p-3">
          <FaFacebook />
          <h1>Facebook</h1>
        </div>
        <div className="flex gap-2 text-xl items-center border border-gray-200 p-3">
          <FaTwitter />
          <h1>Twitter</h1>
        </div>
        <div className="flex gap-2 text-xl items-center border border-gray-200 p-3">
          <FaInstagram />
          <h1>Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
