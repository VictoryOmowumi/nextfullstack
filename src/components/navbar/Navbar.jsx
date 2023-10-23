"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useSearchParams, usePathname } from "next/navigation";
import DarkmodeToggle from "../DarkmodeToggle/DarkmodeToggle";
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const activeLink = (url) => {
        const [searchParams] = useSearchParams();
        const pathname = usePathname();
        const active = pathname === url ? "text-primary border-b-2 border-primary transition duration-500 ease-in-out"
        : "text-slate-400 hover:text-primary transition duration-500 ease-in-out";
        return active;
    };

  

    return (
        <div className="h-[80px] flex justify-between items-center px-4 ">
            <Link href="/" className="text-3xl font-semibold">
                <span className="text-primary">Victo</span>
                <span className="text-black">Rious</span>
            </Link>
            <div className="hidden md:flex space-x-8">
                <DarkmodeToggle />
                {links &&
                    
                    links.map((link) => (
                        <Link
                            href={link.url}
                            key={link.id}
                            className={`text-base ${activeLink(link.url)}`}
                            onClick={() => setShowMenu(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
            </div>

            <div className="md:hidden">
                {showMenu ? (
                    <AiOutlineMenuUnfold
                        className="text-3xl text-black"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                ) : (
                    <AiOutlineMenuFold
                        className="text-3xl text-black"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                )}
                <div
                    className={`${
                        showMenu ? "block" : "hidden"
                    } absolute top-[80px] right-0 w-[100vw] h-[70vh] bg-white z-50`}
                >
                    <div className="flex flex-col gap-12 py-12 items-center h-full">
                        {links &&
                            links.map((link) => (
                                <Link
                                    href={link.url}
                                    key={link.id}
                                    className={`text-2xl ${activeLink(link.url)}`}
                                >
                                    {link.title}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;



