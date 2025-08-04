import React from "react";
import { HeaderContainer } from "./header-container";
import { HeaderSearchBar } from "./header-search";
import { HeaderCta } from "./header-cta";
import { Breadcrumb } from "../Breadcrumb";

export const HeaderMain = () => {
  return (
    <HeaderContainer customClassName="bg-custom-dark-900">
      <div className="container flex items-center justify-between h-20">
        <Breadcrumb />
        <HeaderSearchBar />
        <HeaderCta />
      </div>
    </HeaderContainer>
  );
};
