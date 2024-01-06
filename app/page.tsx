import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Galery from "./ui/galery";
import LeadsProfile from "./ui/leads";
import AgendaCard from "./ui/agendaCard";
import Sponsor from "./ui/sponsor";
import Link from "next/link";

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const agendaData = [
  {
    agendaName: "Day 1",
    agendaDate: "25 Januari 2022",
    tag: "PTN",
    src: "/next.svg",
    href: "/rundown/day1",
  },
  {
    agendaName: "Day 2",
    agendaDate: "26 Januari 2022",
    tag: "PTS",
    src: "/next.svg",
    href: "/rundown/day2",
  },
];

export default function Home() {
  return (
    <main className="">
      <header className="flex flex-col h-screen md:p-10 py-10 border-solid border-b-2">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          className="justify-center h-96 items-center m-auto bg-slate-300 rounded-lg w-full"
        />
        <div className={`${openSans.className} flex flex-col justify-center`}>
          <h1 className="text-6xl font-bold">ACE 2024</h1>
          <p>Assa&apos;adah Campus Expo 2024</p>
          <p>Temukan Kampus Pilihanmu</p>
        </div>
      </header>

      <div className="my-20 ">
        <h2 className="text-4xl font-bold">What is ACE</h2>
        <p className="text-lg text-justify">
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

      <div className="justify-center items-center pb-20 space-y-8 rounded-lg bg-slate-300">
        <h2 className="text-2xl font-bold text-center pt-5">Galery</h2>
        <Galery />
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-bold text-center p-5">
          Kegiatan di ACE 2024
        </h2>
        <div className="md:grid md:grid-cols-3 flex flex-col">
          <div className="bg-slate-400 p-10">
            <h2 className="text-2xl font-bold text-center pb-5">Seminar</h2>
            <p>
              Pengisian materi tenang berbagai hal yang berhubungan dengan
              perkuliahan, seminar ini diisi oleh para alumni yang berkuliah di
              berbagai kampus yang ada di Indonesia
            </p>
          </div>
          <div className="bg-slate-300 p-10">
            <h2 className="text-2xl font-bold text-center pb-5">Pameran</h2>
            <p>
              Pameran yang diisi oleh berbagai kampus yang ada di Indonesia,
              Para siswa bisa menanyakan tentang perkuliahan dengan lebih dekat
              pada kampus tujuan mereka
            </p>
          </div>
          <div className="bg-slate-400 p-10">
            <h2 className="text-2xl font-bold text-center pb-5">Seminar</h2>
            <p>
              Seminar yang akan diisi oleh para alumni yang berkuliah di
              berbagai kampus yang ada di Indonesia
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center py-10">Roundown</h2>
        <div className="flex flex-col space-y-10 py-10 px-10 lg:grid lg:grid-cols-3 lg:space-x-5 lg:space-y-0">
          {agendaData.map((agenda) => (
            <AgendaCard
              agendaName={agenda.agendaName}
              agendaDate={agenda.agendaDate}
              tag={agenda.tag}
              src={agenda.src}
              href={agenda.href}
              key={agenda.agendaName}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center py-10">Campus</h2>
        <Link
          href="/blog"
          className="bg-blue-500 hover:bg-blue-700 text-slate-100 rounded-md py-2 px-5 text-center"
        >
          See More...
        </Link>
      </div>

      <div className="py-32 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">Leads Profile</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptates.
        </p>
        <LeadsProfile />
        <Link href="/teams">
          <button className="bg-sky-800 hover:bg-sky-600 mx-auto rounded-lg py-2 px-5 text-white font-bold">
            Meet Teams
          </button>
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center">Our Partner</h2>
        <Sponsor />
      </div>
    </main>
  );
}
