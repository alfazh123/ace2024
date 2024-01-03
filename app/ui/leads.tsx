import Image from "next/image";
import { Lusitana, Open_Sans } from "next/font/google";

const dataLeads = [
  {
    name: "M. Hasan Amin",
    role: "Ketua Pelaksana",
    src: "",
  },
  {
    name: "M. Faizul Umam",
    role: "Wakil Ketua Pelaksana",
    src: "",
  },
  {
    name: "Khansa Nur Shafa. F",
    role: "Sekertaris",
    src: "",
  },
  {
    name: "Nata Zahroh",
    role: "Wakil Sekertaris",
    src: "",
  },
  {
    name: "Amanda Dwi. R",
    role: "Bendahara",
    src: "",
  },
  {
    name: "Rabiah Al Adawiyah",
    role: "Wakil Bendahara",
    src: "",
  },
  {
    name: "Yufi Fahri Dubais",
    role: "Korlap SMA",
    src: "",
  },
  {
    name: "M. Muzhirul Alam",
    role: "Korlap MA",
    src: "",
  },
  {
    name: "Anugerah Adjie. F",
    role: "Korlap SMK",
    src: "",
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
