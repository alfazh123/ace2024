import Image from "next/image";

const dataGalery = [
  {
    desc: "Penyampaian Materi",
    src: "",
  },
  {
    desc: "Stand Pameran",
    src: "",
  },
  {
    desc: "Penyampaian Materi",
    src: "",
  },
  {
    desc: "Penyampaian Materi",
    src: "",
  },
  {
    desc: "Stand Pameran",
    src: "",
  },
  {
    desc: "Penyampaian Materi",
    src: "",
  },
];

export default function Galery() {
  return (
    <div className="w-full flex justify-center">
      <div className="carousel">
        {dataGalery.map((item, index) => (
          <figure
            className="carousel-center mx-4 bg-slate-700 rounded-xl"
            key={index}
          >
            <Image
              src={item.src}
              alt={item.desc}
              width={354}
              height={300}
              className=""
            />
            <p className="text-white">{item.desc}</p>
          </figure>
        ))}
      </div>
    </div>
  );
}
