import Image from "next/image";
import Link from "next/link";
import {
    FaInstagram,
    FaHome,
    FaQuestion,
    FaSchool,
    FaUserFriends,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-sagegreen text-olive pt-10">
            <div className="container md:px-20 px-10 py-4 flex flex-col md:flex-row md:justify-between space-y-5 md:space-x-5">
                <figure className="w-32">
                    <Image
                        src="/ace2024.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </figure>
                <div>
                    <p className="text-xl font-bold">Sosial</p>
                    <a
                        href="https://www.instagram.com/ace_.2k24/"
                        className="flex"
                    >
                        <FaInstagram className={`mr-2 text-xl`} />
                        ACE2024
                    </a>
                </div>
                <div>
                    <p className="text-xl font-bold">Halaman</p>
                    <Link href="/" className="flex">
                        <FaHome className={`mr-2 text-lg`} />
                        Home
                    </Link>
                    <Link href="/about" className="flex">
                        <FaQuestion className={`mr-2 text-lg`} />
                        About
                    </Link>
                    <Link href="/campus" className="flex">
                        <FaSchool className={`mr-2 text-lg`} />
                        Campus
                    </Link>
                </div>
                <div>
                    <p className="text-xl font-bold">Alamat</p>
                    <p>
                        Jl. Raya Bungah Nomor 1 Sampurnan Bungah 61152, Gresik,
                        Jawa Timur
                    </p>
                </div>
            </div>
            <div className="flex justify-between mx-auto px-20 py-10">
                <p className="text-sm">© 2023 ACE</p>
                <p className="text-sm">All rights reserved</p>
            </div>
        </footer>
    );
}
