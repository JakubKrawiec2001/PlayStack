import React from "react";
import Logo from "@/assets/icons/logo.svg";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center h-20 pl-6 border-b-1 border-custom-dark-700">
      <Logo className="size-6" />
      <p className="text-custom-green text-base font-bold">
        Play<span className="text-custom-blue">stack</span>
      </p>
    </div>
  );
};
