import Image from "next/image";
import Agenda from "@/app/ui/rundown/agenda";

const scheduleSaintek = [
  {
    time: "07.00 - 07.30",
    agenda: "Pembukaan",
  },
  {
    time: "07.30 - 08.00",
    agenda: "Universitas Negeri Surabaya",
  },
  {
    time: "08.00 - 09.00",
    agenda: "Universitas Negeri Semarang",
  },
  {
    time: "09.00 - 10.00",
    agenda: "Universitas Negeri Malang",
  },
  {
    time: "10.00 - 11.00",
    agenda: "Universitas Negeri Yogyakarta",
  },
  {
    time: "11.00 - 12.00",
    agenda: "Institut Teknologi Sepuluh Nopember",
  },
];

const scheduleSoshum = [
  {
    time: "07.00 - 07.30",
    agenda: "Pembukaan",
  },
  {
    time: "07.30 - 08.00",
    agenda: "Universitas Negeri Surabaya",
  },
  {
    time: "08.00 - 09.00",
    agenda: "Universitas Negeri Semarang",
  },
  {
    time: "09.00 - 10.00",
    agenda: "Universitas Negeri Malang",
  },
  {
    time: "10.00 - 11.00",
    agenda: "Universitas Negeri Yogyakarta",
  },
  {
    time: "11.00 - 12.00",
    agenda: "Institut Teknologi Sepuluh Nopember",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col">
      <header className="min-h-96 mt-20 flex flex-col py-10 border-solid border-b-2 border-slate-300">
        <Image
          src="/next.svg"
          alt="Logo"
          width={200}
          height={200}
          className="m-auto w-full h-96 bg-slate-300 rounded-lg"
        />
        <h1 className="text-6xl font-bold my-5 w-full">Day 1 </h1>
        <p className="text-lg text-justify">25 January 2024, 07.00 - 12.00</p>
        <p className="text-lg text-justify">
          Aula SMA Assa'adah dan MA Assa'adah
        </p>
      </header>

      <div className="my-5 space-y-2">
        <h3 className="text-3xl font-semibold">Seminar PTN</h3>
        <p>
          Pada Seminar PTN kali ini akan dihadiri oleh 15 Perguruan Tinggi
          Negeri yang ada di indonesia, acara diadakan di Aula SMA Assa'adah
          untuk bagian SOSHUM dan Aula MA Assa'adah untuk bagian SAINTEK. acara
          ini akan diisi oleh narasumber dari kampus-kampus tersebut.
        </p>
      </div>

      <div className="my-5 md:grid md:grid-cols-2 flex flex-col-reverse text-left">
        <div>
          <h3 className="text-2xl font-semibold">Agenda</h3>
          <ul className="list-disc space-y-4 my-5">
            {scheduleSaintek.map((item, index) => (
              <li key={index}>
                <div className="timeline-marker"></div>
                <div className="">
                  <p className="text-md">{item.time}</p>
                  <p className="text-lg font-semibold">{item.agenda}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Place</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6285368672657!2d112.57178217506866!3d-7.052860569113549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77e25290b56c11%3A0x77fe4bafdf0a78bc!2sSMA%20Assaadah!5e0!3m2!1sid!2sid!4v1704190724387!5m2!1sid!2sid"
            loading="lazy"
            className="md:h-96 h-60 w-full mb-10"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
