import Image from "next/image";
import { Lusitana, Open_Sans } from "next/font/google";

const dataLeads = [
  {
    name: "M. Hasan Amin",
    role: "Ketua Pelaksana",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Faizul Umam",
    role: "Wakil Ketua Pelaksana",
    src: "/leads/1.jpg",
  },
  {
    name: "Khansa Nur Shafa. F",
    role: "Sekertaris",
    src: "/leads/1.jpg",
  },
  {
    name: "Nata Zahroh",
    role: "Wakil Sekertaris",
    src: "/leads/1.jpg",
  },
  {
    name: "Amanda Dwi. R",
    role: "Bendahara",
    src: "/leads/1.jpg",
  },
  {
    name: "Rabiah Al Adawiyah",
    role: "Wakil Bendahara",
    src: "/leads/1.jpg",
  },
  {
    name: "Yufi Fahri Dubais",
    role: "Korlap SMA",
    src: "/leads/1.jpg",
  },
  {
    name: "M. Muzhirul Alam",
    role: "Korlap MA",
    src: "/leads/1.jpg",
  },
  {
    name: "Anugerah Adjie. F",
    role: "Korlap SMK",
    src: "/leads/1.jpg",
  },
];

export default function LeadsProfile() {
  return (
    <div className="flex flex-wrap items-center justify-center py-10">
      {dataLeads.map((item, index) => (
        <div
          className="flex flex-col justify-center items-center px-20 py-10"
          key={index}
        >
          <figure className="">
            <Image
              src={item.src}
              alt={item.name}
              width={200}
              height={200}
              className="rounded-full bg-slate-500"
            />
          </figure>
          <p className="font-bold text-lg">{item.name}</p>
          <p className="">{item.role}</p>
        </div>
      ))}
    </div>
  );
}
