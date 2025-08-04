import React from "react";
import { SidebarHeader } from "./sidebar-header";
import { Button } from "../ui/button";
import { SidebarContent } from "./sidebar-content";
import { SidebarNavigation } from "./sidebar-navigation";

export const Sidebar = () => {
  return (
    <div className="sticky top-0 flex flex-col h-screen w-[20%] border-r-1 border-custom-dark-700 bg-custom-dark-900">
      <SidebarHeader />
      <SidebarContent customClassName="p-6 pt-12">
        <SidebarNavigation />
        <Button variant="gradient" size="wide">
          Test
        </Button>
      </SidebarContent>
    </div>
  );
};
