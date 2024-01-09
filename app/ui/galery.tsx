import Image from "next/image";

const dataGalery = [
  {
    desc: "Penyampaian Materi",
    src: "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYS18Z6jdShoK9nAltAvR2yGjrYh1y01r5S3eKFeoDownlJ3voEfdyXAhEIgXye8PAyae2adwdBp9gAA1w8lNa_Xv_DRhg",
  },
  {
    desc: "Penyampaian Materi",
    src: "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYT3RiNIwqReX2QTf-To3P5EHNp3VV6xrQSz0fTwnd0ts6X1Fo20Dyb68zP3T6JGzVAczCuOLDYMJaDY4lRb2hRszvibPw=w1860-h968",
  },
  {
    desc: "Penyampaian Materi",
    src: "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYSPH--KQ5S2XV7ckvvlsMV_8-WyF4lqA6mF2rHfi816-v9qg91y_6uW-KGdiN921ACHku6GaFlAmprzHvMm0wu4LELs9A=w1860-h968",
  },
  {
    desc: "Stand Pameran",
    src: "https://i0.wp.com/www.qomaruddin.com/wp-content/uploads/2023/01/IMG-20230130-WA0006.jpg?w=1600&ssl=1",
  },
  {
    desc: "Stand Pameran",
    src: "https://i0.wp.com/www.qomaruddin.com/wp-content/uploads/2023/01/IMG-20230130-WA0000.jpg?resize=1024%2C576&ssl=1",
  },
  {
    desc: "Penyampaian Materi",
    src: "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYSglT9WQnE2AOf-azSPNm3iT1PgoidnlBi9VDpF668AGl2v6sJ457ynOJ2ofphajam5yumvP9l1c_gTNbIUHcz8uJ7H=w1860-h968",
  },
];

export default function Galery() {
  return (
    <div className="w-full flex ">
      <div className=" carousel md:mx-5 mx-3">
        {dataGalery.map((item, index) => (
          <figure
            className=" mx-2 bg-slate-700 rounded-xl carousel-item shadow-lg my-5"
            key={index}
          >
            <Image
              src={item.src}
              alt={item.desc}
              width={370}
              height={290}
              className="rounded-xl md:h-full md:w-full sm:w-96 sm:h-60 w-60 h-40"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
