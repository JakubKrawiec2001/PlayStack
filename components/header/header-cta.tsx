import React from "react";
import { Button } from "../ui/button";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
import User from "@/assets/icons/user.svg";
import Wishlist from "@/assets/icons/wishlist.svg";
import Gamepad from "@/assets/icons/gamepad.svg";

export const HeaderCta = () => {
  return (
    <div className="flex items-center gap-3">
      <Button size="lgIcon" variant="dark">
        <Gamepad className="size-6" />
      </Button>
      <Button size="lgIcon" variant="dark">
        <Wishlist className="size-6" />
      </Button>
      <SignedOut>
        <SignUpButton>
          <Button size="lgIcon" variant="dark">
            <User className="size-6" />
          </Button>
        </SignUpButton>
      </SignedOut>

      <Button variant="gradient" size="wide">
        Test
      </Button>
    </div>
  );
};
