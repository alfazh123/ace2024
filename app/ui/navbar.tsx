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
    name: "Contact",
    href: "/contact",
    current: false,
  },
];

export default function Navbar() {
  return (
    <nav className="bg-neutral-300 flex justify-around py-3">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className="flex space-x-5 text-slate-900">
        {data.map((item) => (
          <Link href={item.href} key={item.name}>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
