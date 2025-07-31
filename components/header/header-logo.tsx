import React from "react";
import Logo from "@/assets/icons/logo.svg";

export const HeaderLogo = () => {
  return (
    <div className="flex items-center ">
      <Logo className="w-8 h-8" />
      {/* <p className="text-custom-white">PlayStack</p> */}
    </div>
  );
};
