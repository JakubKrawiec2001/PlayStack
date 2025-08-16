import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import User from "@/assets/icons/user.svg";
import { UserInfo } from "../UserInfo";

export const HeaderCta = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button size="lgIcon" variant="icon">
            <User className="size-6" />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button size="lgIcon" variant="icon">
          <UserInfo />
        </Button>
      </SignedIn>
    </>
  );
};
