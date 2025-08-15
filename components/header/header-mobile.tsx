import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Menu from "@/assets/icons/menu.svg";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const HeaderMobile = () => {
  // MAKE MOBILE NAVIGATION
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "icon", size: "lgIcon" }),
          "flex lg:hidden"
        )}
      >
        <Menu className="size-8 text-custom-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
