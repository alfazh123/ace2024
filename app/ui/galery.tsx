import Image from "next/image";

const dataGalery = [
  {
    desc: "Penyampaian Materi",
    src: "/galery/1.jpg",
  },
  {
    desc: "Stand Pameran",
    src: "/galery/2.jpg",
  },
  {
    desc: "Penyampaian Materi",
    src: "/galery/1.jpg",
  },
];

export default function Galery() {
  return (
    <div className="w-full flex justify-center">
      <div className="carousel">
        {dataGalery.map((item, index) => (
          <figure
            className="relative carousel-center mx-4 bg-slate-700"
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
