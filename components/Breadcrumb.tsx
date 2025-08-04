import React from "react";
import ArrowLeft from "@/assets/icons/chevron-left.svg";

export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-custom-white opacity-50 font-extralight">
      <ArrowLeft />
      <p>Breadcrumbs</p>
    </div>
  );
};
