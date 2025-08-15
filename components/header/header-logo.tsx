import React from "react";
import Logo from "@/assets/icons/logo.svg";

export const HeaderLogo = () => {
  return (
    <div className="flex-center gap-1">
      <Logo className="size-6" />
      <p className="text-lg font-medium text-custom-white">Playstack</p>
    </div>
  );
};
