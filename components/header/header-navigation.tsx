"use client";

import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const HeaderNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex-center gap-8">
      {navLinks.map((item) => {
        const isActive =
          pathname === item.path || pathname.startsWith(`${item.path}/`);
        return (
          <Link
            key={item.id}
            href={item.path}
            className={cn(`text-custom-white`, isActive ? `` : ``)}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
