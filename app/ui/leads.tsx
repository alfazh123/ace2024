import Image from "next/image";
import { Lusitana, Open_Sans } from "next/font/google";

const dataLeads = [
  {
    name: "Muhammad Iqbal",
    nim: "0000000001",
    src: "/leads/1.jpg",
  },
  {
    name: "Muhammad Iqbal",
    nim: "0000000001",
    src: "/leads/1.jpg",
  },
  {
    name: "Muhammad Iqbal",
    nim: "0000000001",
    src: "/leads/1.jpg",
  },
  {
    name: "Muhammad Iqbal",
    nim: "0000000001",
    src: "/leads/1.jpg",
  },
  {
    name: "Muhammad Iqbal",
    nim: "0000000001",
    src: "/leads/1.jpg",
  },
  {
    name: "Muhammad Iqbal",
    nim: "0000000001",
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
              className="rounded-full bg-white"
            />
          </figure>
          <p className="text-white font-bold text-lg">{item.name}</p>
          <p className="text-white">{item.nim}</p>
        </div>
      ))}
    </div>
  );
}
