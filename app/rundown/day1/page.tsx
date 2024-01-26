import Agenda from "@/app/ui/rundown/agenda";

const scheduleDay1 = [
    {
        time: "07.30 - 07.35",
        agenda: "Pembukaan Acara",
    },
    {
        time: "07.35 - 07.45",
        agenda: "Qira'ah",
    },
    {
        time: "07.45 - 07.55",
        agenda: "Menyanyikan lagu Indonesia raya dan Mars YPPQ",
    },
    {
        time: "07.55 - 08.00",
        agenda: "Sambutan ketua pelaksana",
    },
    {
        time: "08.00 - 08.10",
        agenda: "Sambutan kepala sekolah",
    },
    {
        time: "08.10 - 08.20",
        agenda: "Sambutan ketua YPPQ sekaligus grand opening ACE 2024",
    },
    {
        time: "08.20 - 08.25",
        agenda: "Do'a",
    },
    {
        time: "08.50 - 09.10",
        agenda: "Presentasi IKBAL Malang",
    },
    {
        time: "09.10 - 09.20",
        agenda: "Presentasi IKBAL Madura",
    },
    {
        time: "09.20 - 09.35",
        agenda: "Presentasi IKBAL Jember",
    },
    {
        time: "09.35 - 09.50",
        agenda: "Presentasi IKBAL Jakarta",
    },
    {
        time: "09.50 - 10.35",
        agenda: "Ice breaking",
    },
    {
        time: "10.35 - 11.05",
        agenda: "Presentasi IKBAL Surabaya",
    },
    {
        time: "11.05 - 11.25",
        agenda: "Presentasi IKBAL Jogja",
    },
    {
        time: "11.25 - 11.35",
        agenda: "Presentasi IKBAL Kediri",
    },
    {
        time: "11.35 - 11.45",
        agenda: "Presentasi IKBAL Tulungagung",
    },
    {
        time: "11.45 - 11.55",
        agenda: "Presentasi IKBAL Semarang",
    },
    {
        time: "11.55 - 12.30",
        agenda: "Penutupan",
    },
];

export default function Page() {
    return (
        <div className="flex flex-col">
            <header className="min-h-96 mt-20 flex flex-col py-10 border-solid border-b-2 border-slate-300">
                <div
                    className="justify-center md:h-96 items-center md:m-auto mt-20 bg-slate-300 rounded-lg sm:w-full w-full h-60 bg-cover bg-right"
                    style={{
                        backgroundImage: "url(/imagehome.svg)",
                    }}
                ></div>
                <h1 className="text-6xl font-bold my-5 w-full">Day 1 </h1>
                <p className="text-lg text-justify">
                    27 January 2024, 07.00 - selesai
                </p>
                <p className="text-lg text-justify">Aula Yayasan Pondok Pesantren Qonaruddin</p>
            </header>

            <div className="my-5 space-y-2">
                <h3 className="text-3xl font-semibold">Seminar PTN</h3>
                <p>
                    Pada Seminar PTN kali ini akan dihadiri oleh 22 Perguruan
                    Tinggi Negeri yang ada di indonesia, acara diadakan di Aula
                    Yayasan Pondok Pesantren Qomaruddin. acara ini akan diisi oleh narasumber
                    dari kampus-kampus tersebut.
                </p>
            </div>

            <div className="">
                <div className="my-5 md:grid md:grid-cols-2 flex flex-col-reverse text-left">
                    <Agenda name="Agenda" data={scheduleDay1} />
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
    );
}
