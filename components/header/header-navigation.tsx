import { navLinks } from "@/data/navigation";
import Link from "next/link";
import React from "react";

export const HeaderNavigation = () => {
  return (
    <div className="flex items-center gap-4 text-custom-white">
      {navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="text-custom-white font-light"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
