import { cn } from "@/lib/utils";
import React from "react";

export const HeaderContainer = ({
  children,
  customClassName,
}: {
  children: React.ReactNode;
  customClassName?: string;
}) => {
  return (
    <header className={cn(`container sticky top-8`, customClassName)}>
      {children}
    </header>
  );
};
