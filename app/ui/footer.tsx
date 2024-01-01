import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-200 text-slate-900 pt-10">
      <div className="container px-20 py-4 flex justify-between items-center">
        <figure className="w-20">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </figure>
        <div>
          <p className="text-xl font-bold">Kontak</p>
          <p>Phone: 0812-3456-7890</p>
        </div>
        <div>
          <p className="text-xl font-bold">Alamat</p>
          <p>
            Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111
          </p>
        </div>
      </div>
      <div className="flex justify-between mx-auto px-20 py-10">
        <p className="text-sm">© 2021 ACE</p>
        <p className="text-sm">All rights reserved</p>
      </div>
    </footer>
  );
}
