import { Open_Sans } from "next/font/google";
import Galery from "./ui/galery";
import AgendaCard from "./ui/agendaCard";
import Sponsor from "./ui/sponsor";
import Link from "next/link";
import CampusPreview from "./ui/campus-preview";
import Countdown from "./ui/countdown";

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const DataCampusPreview = [
  {
    campusName: "Institut Teknologi Sepuluh Nopember",
    src: "/campus/its.jpeg",
    href: "/campus/Institut-Teknologi-Sepuluh-Nopember",
  },
  {
    campusName: "Universitas Qomaruddin Gresik",
    src: "/campus/uq.png",
    href: "/campus/Universitas-Qomaruddin",
  },
  {
    campusName: "Universitas Negri Surabaya",
    src: "/campus/unesa.jpeg",
    href: "/campus/Universitas-Negeri-Surabaya",
  },
];

const agendaData = [
  {
    agendaName: "Day 1",
    agendaDate: "25 Januari 2022",
    tag: "PTN",
    src: "/agenda/day1.svg",
    href: "/rundown/day1",
  },
  {
    agendaName: "Day 2",
    agendaDate: "26 Januari 2022",
    tag: "PTS",
    src: "/agenda/day2.svg",
    href: "/rundown/day2",
  },
];

export default function Home() {
  return (
    <main className="">
      <header className="flex flex-col md:h-screen sm:p-10 py-10 border-solid border-b-2">
        <div
          className="justify-center md:h-96 items-center md:m-auto mt-20 bg-slate-300 rounded-lg sm:w-full w-full h-60 bg-cover bg-right"
          style={{
            backgroundImage: "url(/imagehome.svg)",
          }}
        ></div>
        <div
          className={`${openSans.className} flex flex-col justify-center md:mt-0 mt-10`}
        >
          <h1 className="text-6xl font-bold">ACE 2024</h1>
          <p>Assa&apos;adah Campus Expo 2024</p>
          <p>Temukan Kampus Pilihanmu</p>
        </div>
      </header>

      <div className="flex justify-center items-center mt-10">
        <Countdown />
      </div>

      <div className="my-20 ">
        <h2 className="text-4xl font-bold">What is ACE</h2>
        <p className="text-lg text-justify">
          ACE atau Assa&apos;adah Campus Expo merupakan sebuah acara campus expo
          yang diadakan oleh IKBAL yang bertujuan untuk memberikan gambaran
          kepada siswa-siswa SMA, MA, dan SMK Assa&apos;adah menganai
          kampus-kampus yang ada di Indonesia. Dengan adanya acara ini,
          diharapkan siswa-siswa dapat mengetahui kampus yang sesuai dengan
          minat dan bakat mereka. Acara ini juga bertujuan untuk memberikan
          gambaran kepada siswa-siswa mengenai dunia perkuliahan yang
          sesungguhnya, sehingga siswa-siswa dapat mempersiapkan diri sebelum
          memasuki dunia perkuliahan.
        </p>
      </div>

      <div className="justify-center items-center md:pb-20 pb-10 space-y-8 rounded-lg bg-sage">
        <h2 className="text-2xl font-bold text-center pt-5">Galery</h2>
        <Galery />
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-bold text-center p-5">
          Kegiatan di ACE 2024
        </h2>
        <div className="md:grid md:grid-cols-3 flex flex-col">
          <div className="bg-olive p-10">
            <h2 className="text-2xl font-bold text-center pb-5">Seminar</h2>
            <p>
              Pengisian materi tenang berbagai hal yang berhubungan dengan
              perkuliahan, seminar ini diisi oleh para alumni yang berkuliah di
              berbagai kampus yang ada di Indonesia
            </p>
          </div>
          <div className="bg-sagegreen p-10">
            <h2 className="text-2xl font-bold text-center pb-5">Pameran</h2>
            <p>
              Pameran yang diisi oleh berbagai kampus yang ada di Indonesia,
              Para siswa bisa menanyakan tentang perkuliahan dengan lebih dekat
              pada kampus tujuan mereka
            </p>
          </div>
          <div className="bg-olive p-10">
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
        <div className="flex flex-col space-y-10 py-10 md:px-10 lg:grid lg:grid-cols-3 lg:space-x-5 lg:space-y-0">
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

      <div className="flex flex-col items-center mb-20">
        <h2 className="text-2xl font-bold text-center pt-10">Campus</h2>
        <p className="text-center">Informasi tentang kampus</p>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 md:space-y-0 space-y-4 justify-center my-5 gap-5">
          {DataCampusPreview.map((campus, index) => (
            <CampusPreview
              campusName={campus.campusName}
              src={campus.src}
              href={campus.href}
              key={index}
            />
          ))}
        </div>
        <Link
          href="/campus"
          className="bg-olive hover:bg-sagegreen hover:text-oliver hover:border-solid hover:border-2 hover:border-olive text-pewter rounded-md py-2 px-5 text-center"
        >
          See More...
        </Link>
      </div>

      {/* <div>
        <h2 className="text-2xl font-bold text-center">Our Partner</h2>
        <Sponsor />
      </div> */}
    </main>
  );
}
