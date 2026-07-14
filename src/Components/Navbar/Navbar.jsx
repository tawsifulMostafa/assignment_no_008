"use client";

import { signOut, useSession } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const NavPage = () => {
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

            {/* Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
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

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link href="/home">Home</Link>
                        </li>

                        <li>
                            <Link href="/books">All Books</Link>
                        </li>

                        <li>
                            <Link href="/profile">My Profile</Link>
                        </li>
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

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1 font-medium">
                    <li>
                        <Link href="/home">Home</Link>
                    </li>

                    <li>
                        <Link href="/books">All Books</Link>
                    </li>

                    <li>
                        <Link href="/profile">My Profile</Link>
                    </li>
                </ul>
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