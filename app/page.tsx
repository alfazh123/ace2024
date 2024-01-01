import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Galery from "./ui/galery";
import LeadsProfile from "./ui/leads";
import AgendaCard from "./ui/agendaCard";
import Sponsor from "./ui/sponsor";

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const agendaData = [
  {
    agendaName: "Pendaftaran",
    agendaDate: "1 Januari 2022",
    src: "/next.svg",
    href: "/",
  },
  {
    agendaName: "Pendaftaran",
    agendaDate: "1 Januari 2022",
    src: "/next.svg",
    href: "/",
  },
];

export default function Home() {
  return (
    <main className="">
      <header className="flex flex-col p-10 border-solid border-b-2">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          className="justify-center h-96 items-center m-auto bg-slate-300 rounded-lg w-full"
        />
        <div
          className={`${openSans.className} flex flex-col justify-center pl-20  space-y-5`}
        >
          <h1 className="text-6xl font-bold">ACE 2024</h1>
          <p>Assa'adah Campus Expo 2024</p>
        </div>
      </header>

      <div className="min-h-96 mt-10">
        <h2 className="text-2xl font-bold">What is ACE</h2>
        <p className="text-md text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptates.Commodo cupidatat sint nostrud esse Lorem sunt ullamco.
          Incididunt enim do sunt tempor aute occaecat laboris pariatur aliqua
          consequat sint. Veniam aliqua ullamco magna ea ex do in cupidatat ut.
          Veniam esse ea consequat et culpa exercitation ipsum consectetur culpa
          ullamco exercitation cillum. Eiusmod minim labore amet deserunt
          eiusmod mollit ex commodo id commodo. Cillum ipsum sint cupidatat ad.
          Nisi ut consectetur laboris anim eiusmod nisi nisi cillum occaecat.
          Quis fugiat occaecat ad in consectetur deserunt laborum ut consectetur
          minim aliqua in. Dolor magna occaecat amet et amet excepteur qui
          incididunt cillum ea enim dolor reprehenderit. Minim deserunt est
          commodo pariatur ad quis magna duis. Nostrud occaecat ea esse et
          occaecat ipsum veniam enim ea eiusmod. Veniam duis quis eu eu.
        </p>
      </div>

      <div className="justify-center items-center pb-32 space-y-8 bg-slate-300">
        <h2 className="text-2xl font-bold text-center">Galery</h2>
        <Galery />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center">Roundown</h2>
        <div className="flex flex-col space-y-10 py-10 px-10 md:grid md:grid-cols-3 md:space-x-5 md:space-y-0">
          {agendaData.map((agenda) => (
            <AgendaCard
              agendaName={agenda.agendaName}
              agendaDate={agenda.agendaDate}
              src={agenda.src}
              href={agenda.href}
              key={agenda.agendaName}
            />
          ))}
        </div>
      </div>

      <div className="py-32">
        <h2 className="text-2xl font-bold text-center">Leads Profile</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptates.
        </p>
        <LeadsProfile />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center">Our Partner</h2>
        <Sponsor />
      </div>
    </main>
  );
}
