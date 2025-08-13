import React from "react";
import { Button } from "../ui/button";
import { SignedOut, SignUpButton } from "@clerk/nextjs";

export const HeaderCta = () => {
  return (
    <SignedOut>
      <SignUpButton>
        <Button size="lg" variant="default">
          Sign In
        </Button>
      </SignUpButton>
    </SignedOut>
  );
};
