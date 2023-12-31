import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Galery from "./ui/galery";
import LeadsProfile from "./ui/leads";

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-500">
      <header className="min-h-screen grid grid-cols-2 items-center p-10">
        <div className={`${openSans.className} justify-center text-center`}>
          <h1 className="text-4xl font-bold">ACE 2024</h1>
          <p>Assa'adah Campus Expo 2024</p>
        </div>

        <figure className="">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </figure>
      </header>

      <div className="min-h-96 bg-gradient-to-b from-slate-500 to-slate-300">
        <h2 className="text-2xl font-bold text-center">What is ACE</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptates.
        </p>
      </div>

      <div className="justify-center items-center pb-32 space-y-8 bg-slate-300">
        <h2 className="text-2xl font-bold text-center">Galery</h2>
        <Galery />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center">Roundown</h2>
      </div>

      <div className="py-32">
        <h2 className="text-2xl font-bold text-center">Leads Profile</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptates.
        </p>
        <LeadsProfile />
      </div>

      <footer className="bg-neutral-300 flex justify-center py-3">
        <p>© 2021 ACE</p>
      </footer>
    </main>
  );
}
