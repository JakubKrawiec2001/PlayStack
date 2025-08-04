import { cn } from "@/lib/utils";
import React from "react";

export const SidebarContent = ({
  children,
  customClassName,
}: {
  children: React.ReactNode;
  customClassName?: string;
}) => {
  return (
    <div
      className={cn(`flex flex-col justify-between flex-1`, customClassName)}
    >
      {children}
    </div>
  );
};
