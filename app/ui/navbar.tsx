"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { useRouter } from "next/navigation";
import React, { useState, useCallback } from "react";

const data = [
    {
        name: "Home",
        href: "/",
        current: true,
    },
    {
        name: "About",
        href: "/about",
        current: false,
    },
];

interface NavbarProps {
    href: string;
}

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    return (
        <nav className="fixed w-full z-10">
            <div className="flex justify-between bg-pewter shadow-xl md:px-20 px-10 py-3">
                <Link href="/">
                    <Image
                        src="/ace2024.svg"
                        alt="Next.js Logo"
                        width={80}
                        height={80}
                        priority
                    />
                </Link>
                <div className="md:flex hidden items-center space-x-5 text-slate-900">
                    {data.map((item) => (
                        <Link href={item.href} key={item.name}>
                            <p className="font-semibold text-lg hover:bg-ivory px-3 py-2 rounded-lg">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <MdOutlineMenu className="text-3xl text-slate-900" />
                    </button>
                </div>
            </div>

            <div
                className={`py-5 bg-slate-200 w-full px-5 md:hidden bg-ivory ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <ul className="space-y-4">
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} key={item.name}>
                                <p className="font-semibold hover:bg-pewter px-3 py-2 rounded-md">
                                    {item.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
