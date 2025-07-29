import React from "react";
import { HeaderContainer } from "./header-container";
import { HeaderLogo } from "./header-logo";
import { HeaderSearchBar } from "./header-search";
import { HeaderNavigation } from "./header-navigation";
import { Button } from "../ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export const HeaderMain = () => {
  return (
    <HeaderContainer customClassName="bg-custom-dark-900 border-b-1 border-custom-dark-700">
      <div className="container flex items-center justify-between mx-auto h-14">
        <div className="flex items-center gap-4">
          <HeaderLogo />
          <HeaderNavigation />
        </div>
        <HeaderSearchBar />
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <Button className="bg-custom-green text-custom-white h-10 sm:h-12 px-4 sm:px-5">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </HeaderContainer>
  );
};
