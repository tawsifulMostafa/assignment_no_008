"use client";

import { signOut, useSession } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import NavLink from "./NavLink";

const NavPage = () => {
    const pathname = usePathname();
    const { data, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex justify-center items-center py-5">
                Loading...
            </div>
        );
    }

    const user = data?.user;

    return (
        <div className="navbar bg-base-100 shadow-md px-4 lg:px-10">

            {/* Logo + Mobile Dropdown */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>

                    {/* Mobile dropdown menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/books">Books</NavLink></li>
                        <li><NavLink href="/profile">Profile</NavLink></li>
                    </ul>
                </div>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/asset/book.png"
                        width={45}
                        height={45}
                        alt="logo"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">
                            Mango
                        </h2>
                        <p className="hidden md:block text-xs text-gray-500">
                            Book Borrowing Platform
                        </p>
                    </div>
                </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="navbar-center hidden lg:flex gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/books">Books</NavLink>
                <NavLink href="/profile">Profile</NavLink>
            </div>

            {/* Right Side */}
            <div className="navbar-end gap-3">
                {user ? (
                    <>
                        <p className="hidden md:block">
                            Welcome, <span className="font-semibold">{user.name}</span>
                        </p>
                        <button
                            className="btn btn-error btn-sm"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <Link href="/logIn" className="btn btn-accent btn-sm">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavPage;