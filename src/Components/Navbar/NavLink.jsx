"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? "text-blue-500 fond bold" : ""}
    >
      {children}
    </Link>
  );
};

export default NavLink;