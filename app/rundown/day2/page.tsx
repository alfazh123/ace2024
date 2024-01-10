import Image from "next/image";
import Agenda from "@/app/ui/rundown/agenda";

const scheduleSaintek = [
  {
    time: "07.00 - 07.30",
    agenda: "Pembukaan",
  },
  {
    time: "07.30 - 08.00",
    agenda: "Universitas Surabaya",
  },
  {
    time: "08.00 - 09.00",
    agenda: "Universitas Islam Malang",
  },
  {
    time: "09.00 - 10.00",
    agenda: "Universitas Hang Tuah Surabaya",
  },
  {
    time: "10.00 - 11.00",
    agenda: "ITATS Surabaya",
  },
  {
    time: "11.00 - 12.00",
    agenda: "Institut Teknologi Telkom Purwokerto",
  },
];

const scheduleSoshum = [
  {
    time: "07.00 - 07.30",
    agenda: "Pembukaan",
  },
  {
    time: "07.30 - 08.00",
    agenda: "Universitas Surabaya",
  },
  {
    time: "08.00 - 09.00",
    agenda: "Universitas Islam Malang",
  },
  {
    time: "09.00 - 10.00",
    agenda: "Universitas Hang Tuah Surabaya",
  },
  {
    time: "10.00 - 11.00",
    agenda: "ITATS Surabaya",
  },
  {
    time: "11.00 - 12.00",
    agenda: "Institut Teknologi Telkom Purwokerto",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col">
      <header className="min-h-96 mt-20 flex flex-col py-10 border-solid border-b-2 border-slate-300">
        <Image
          src="/imagehome.svg"
          alt="Logo"
          width={200}
          height={200}
          className="m-auto w-full h-96 bg-slate-300 rounded-lg"
        />
        <h1 className="text-6xl font-bold my-5 w-full">Day 2 </h1>
        <p className="text-lg text-justify">26 January 2024, 07.00 - 12.00</p>
        <p className="text-lg text-justify">
          Aula SMA Assa&apos;adah dan MA Assa&apos;adah
        </p>
      </header>

      <div className="my-5 space-y-2">
        <h3 className="text-3xl font-semibold">Seminar PTS</h3>
        <p>
          Pada Seminar PTS kali ini akan dihadiri oleh 15 Perguruan Tinggi
          Negeri yang ada di indonesia, acara diadakan di Aula SMA
          Assa&apos;adah untuk bagian SOSHUM dan Aula MA Assa&apos;adah untuk
          bagian SAINTEK. acara ini akan diisi oleh narasumber dari
          kampus-kampus tersebut.
        </p>
      </div>

      <div role="tablist" className="tabs tabs-bordered mb-10">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="SAINTEK"
        />
        <div role="tabpanel" className="tab-content">
          <div className="my-5 md:grid md:grid-cols-2 flex flex-col-reverse text-left">
            <Agenda name="Agenda SAINSTEK" data={scheduleSaintek} />
            <div>
              <h3 className="text-2xl font-semibold">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1032.7055690347038!2d112.57446812926018!3d-7.053019377690204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77fd20449a2965%3A0xa2e4c68a7da93562!2sMA%20MA&#39;ARIF%20NU%20ASSA&#39;ADAH!5e0!3m2!1sid!2sid!4v1704261782020!5m2!1sid!2sid"
                loading="lazy"
                className="md:h-96 h-60 w-full mb-10"
              ></iframe>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="SHOSUM"
        />
        <div role="tabpanel" className="tab-content">
          <div className="my-5 md:grid md:grid-cols-2 flex flex-col-reverse text-left">
            <Agenda name="Agenda SOSHUM" data={scheduleSoshum} />
            <div>
              <h3 className="text-2xl font-semibold">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.5364826472804!2d112.57436328801559!3d-7.0529246017201235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77e25290b56c11%3A0x77fe4bafdf0a78bc!2sSMA%20Assaadah!5e0!3m2!1sid!2sid!4v1704261943910!5m2!1sid!2sid"
                loading="lazy"
                className="md:h-96 h-60 w-full mb-10"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
