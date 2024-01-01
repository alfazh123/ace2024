import Image from "next/image";

const dataSponsor = [
  {
    src: "/sponsor/1.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/2.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/3.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/4.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/5.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/6.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/7.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/8.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/9.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/10.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/11.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/12.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/13.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/14.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/15.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/16.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/17.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/18.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/19.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/20.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/21.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/22.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/23.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/24.png",
    alt: "Logo Sponsor",
  },
  {
    src: "/sponsor/25.png",
    alt: "Logo Sponsor",
  },
];

export default function Sponsor() {
  return (
    <div className="flex flex-wrap justify-center items-center py-10">
      {dataSponsor.map((item, index) => (
        <div
          className="flex flex-col justify-center items-center px-5 py-5"
          key={index}
        >
          <figure className="">
            <Image
              src={item.src}
              alt={item.alt}
              width={100}
              height={100}
              className="rounded-full bg-slate-500"
            />
          </figure>
        </div>
      ))}
    </div>
  );
}
