import React from "react";
import { HeaderContainer } from "./header-container";
import { HeaderLogo } from "./header-logo";
import { HeaderSearchBar } from "./header-search";
import { HeaderNavigation } from "./header-navigation";
import { HeaderCta } from "./header-cta";

export const HeaderMain = () => {
  return (
    <HeaderContainer customClassName="bg-custom-dark-900 border-b-1 border-custom-dark-700">
      <div className="container flex items-center justify-between mx-auto min-h-20">
        <div className="flex items-center gap-12">
          <HeaderLogo />
          <HeaderNavigation />
        </div>
        <HeaderSearchBar />
        <HeaderCta />
      </div>
    </HeaderContainer>
  );
};
