import Link from "next/link";
import Image from "next/image";

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
  {
    name: "FAQ",
    href: "/faq",
    current: false,
  },
];

export default function Navbar() {
  return (
    <nav className="bg-slate-300 shadow-xl flex justify-between px-20 py-3 fixed w-full">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className="flex items-center space-x-5 text-slate-900">
        {data.map((item) => (
          <Link href={item.href} key={item.name}>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
