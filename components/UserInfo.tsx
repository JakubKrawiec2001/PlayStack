import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export const UserInfo = async () => {
  const user = await currentUser();
  //  MAKE USER INFO COMPONENT
  return <UserButton />;
};
