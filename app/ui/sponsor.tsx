import Image from "next/image";

const dataSponsor = [
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
  {
    src: "",
    alt: "Logo Sponsor",
  },
];

export default function Sponsor() {
  return (
    <div className="flex flex-wrap justify-center items-center py-10">
      {dataSponsor.map((item, index) => (
        <div
          className="flex flex-col justify-center items-center px-5 py-5 shadow-md m-2 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out"
          key={index}
        >
          <figure className="">
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={150}
              className="rounded-full bg-slate-500"
            />
          </figure>
        </div>
      ))}
    </div>
  );
}
