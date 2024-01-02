import MemberDivisi from "../ui/teams/member-divisi";

const memberDivisiData = [
  {
    name: "M. Hasan Amin",
    role: "Ketua Pelaksana",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Faizul Umam",
    role: "Wakil Ketua Pelaksana",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "Khansa Nur Shafa. F",
    role: "Sekertaris",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "Nata Zahroh",
    role: "Wakil Sekertaris",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "Amanda Dwi. R",
    role: "Bendahara",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "Rabiah Al Adawiyah",
    role: "Wakil Bendahara",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "Yufi Fahri Dubais",
    role: "Korlap SMA",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Muzhirul Alam",
    role: "Korlap MA",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "Anugerah Adjie. F",
    role: "Korlap SMK",
    divisi: "BPH",
    src: "/leads/1.jpg",
  },
  {
    name: "Mashitta Izzati",
    role: "Koor Divisi Acara",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Rifqi Arianto",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Khildah Raya",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Intan Eka Safitri",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Muhammad shidqi karimi",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Nur fajriyatus shobahah",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Akmal dzaki mustaqim",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Istiana Thoyyibah",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Sabitah naura eka putri",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Firdatul Auliyah",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Lailatul sa’idah maghfiroh",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Yazid al-bustomi",
    role: "Anggota",
    divisi: "Acara",
    src: "/leads/1.jpg",
  },
  {
    name: "Moh Imam Wahyudi",
    role: "Koor Divisi Humas",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Dini Ayuning Safitri",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Rikza Fiqih Yuliyansyah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Nurika Ameliah Rosyidah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Annisa Nur Jannah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Naila Nasywah Faradilla",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Nazahatul Majidah Ashofiyah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Fatihatul Fitriya",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Nurin Laily",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Nada Faradisa Putri",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Nur ‘Aini Najwad Dini",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Fatchul Arif Hisbullah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Zahrotul Rahmaniyah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Dwi Putri Aprilia Vavadillah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Aminah Devina",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Ainur Rosyidah",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Awwaliyah Putri Novianti",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Rangga Abidzar",
    role: "Anggota",
    divisi: "Humas",
    src: "/leads/1.jpg",
  },
  {
    name: "Ayu Izzun Nufah",
    role: "Koor Divisi Kesertariatan",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Nur Wahyuni",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Nurun Nabila",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Najibatun Najwa",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Rizka Amelia Putri",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Fera Dinda Puspitasari",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Mauludah Luthfiana Nastiti",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Iftitari Itsna Sayyidah",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Merry ‘Arofiyatul Husna",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Shofi Nela Fadilla",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Asifatul Mufidah",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Ananda Nur Fauziyatur Rofiqoh",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Syalsa Zahra",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Nadi’ah Aishwarya Rai P. M",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
  {
    name: "Fifi Sifa Fauziyah",
    role: "Anggota",
    divisi: "Kesertariatan",
    src: "/leads/1.jpg",
  },
];

const divisiData = ["BPH", "Acara", "Humas", "Kesertariatan"];

export default function Teams() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col py-10">
        <h1 className="text-6xl font-bold mt-32 w-full">Our Teams</h1>
      </header>

      <div className="space-y-8 mb-20">
        {divisiData.map((divisi, index) => (
          <div key={index}>
            <h3 className="text-3xl font-semibold ">{divisi}</h3>
            <div className="flex space-x-8 carousel p-10">
              {memberDivisiData.map((item, index) => (
                <div
                  className={`${
                    item.divisi === divisi ? "" : "hidden"
                  } carousel-item`}
                >
                  <MemberDivisi
                    key={index}
                    name={item.name}
                    role={item.role}
                    divisi={item.divisi}
                    src={item.src}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
