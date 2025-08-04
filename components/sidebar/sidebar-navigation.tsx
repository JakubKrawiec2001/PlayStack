"use client";

import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SidebarNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {navLinks.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.path || pathname.startsWith(`${item.path}/`);
        return (
          <Link
            key={item.id}
            href={item.path}
            className={cn(
              `flex items-center gap-4 pl-6 py-3 text-custom-white rounded-sm`,
              isActive
                ? `bg-custom-white/10 cursor-default`
                : `hover:bg-custom-white/20`
            )}
          >
            <Icon className="size-6" />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
