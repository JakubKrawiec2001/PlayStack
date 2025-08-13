import React from "react";
import { HeaderContainer } from "./header-container";
import { HeaderCta } from "./header-cta";
import { Button } from "../ui/button";
import Wishlist from "@/assets/icons/wishlist.svg";
import Gamepad from "@/assets/icons/gamepad.svg";
import { HeaderLogo } from "./header-logo";
import { HeaderNavigation } from "./header-navigation";

export const HeaderMain = () => {
  return (
    <HeaderContainer customClassName="flex items-center justify-between h-20 rounded-lg bg-custom-dark-800">
      <div className="flex-center gap-24">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
      <div className="flex items-center gap-3">
        <Button size="lgIcon" variant="icon">
          <Gamepad className="size-6" />
        </Button>
        <Button size="lgIcon" variant="icon">
          <Wishlist className="size-6" />
        </Button>
        <HeaderCta />
      </div>
    </HeaderContainer>
  );
};
