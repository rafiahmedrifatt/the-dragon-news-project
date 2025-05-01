import React from "react";
import LoginWith from "../../components/loginwith/LoginWith";
import FindUs from "../../components/findUs/FindUs";
import Qzone from "../../components/Qzone/Qzone";

const RightAside = () => {
  return (
    <div>
      <LoginWith />
      <FindUs />
      <Qzone />
    </div>
  );
};

export default RightAside;
