import Image from "next/image";

const dataGalery = [
  {
    desc: "Penyampaian Materi",
    src: "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYS18Z6jdShoK9nAltAvR2yGjrYh1y01r5S3eKFeoDownlJ3voEfdyXAhEIgXye8PAyae2adwdBp9gAA1w8lNa_Xv_DRhg",
  },
  {
    desc: "Penyampaian Materi",
    src: "https://lh3.googleusercontent.com/fife/AGXqzDld-Brca79XsfAHJ6kzxoDt9iHoHReo4Nd-QC3T4_iR3WFWQHxodU1K8m8SswTQu9C6EN0O3ckhzybWfWcTVWSxSBWqvHd_RVBT1SRMeulEVW8Zvc41MsLKSOssOMunQsj7bEuNnlTfJVBkLo-TMzL5XPvRGYjsJd8aEIVnmqm5tr5sH5vRABymO2C4P8twfJoHkI8AQgiguxYRBxVHAsvvuhqyEv2U4DqrcDgAjYLfFlRNuy2RGX01I_M-MU6lTRdlcmqrQP2Ke9nS8BYlu5J4aJnJdy0p8RY7gq6uwKxgn5XRcGSIBTeng-Zajg1kMBDp41lL0Vjk_Lwc8W4C7Mt2BkioITAZE1uRrKlv1uNV3ZkGeqvuGZ0Mxu0mI_8vnlJFVXCLQi-YNbu6YC-gCN-Wxkis5qyZiy4ozzk-X7n3qMpYGwgUFsabFz8o3JciuJugadEwnEtKmVN3P0SJR2JE3bbIjvD38IeDKNLjnALR93Vn7pw-15H3SAg6R7NjRlq8l5NVXBBV7vHkJWlkHWK3Zii0pq7gRVPV0D2CF_xnKDORzfsUuiNkneS6PsXIr7q-42_k1w08ghw8VV8U-mfa-80z3x42jzPpnzlbNXXjtTayrRdAIWPGmNfY2tq2n64eri13DGA-q-O0f7qqMWoeDo2ybbxrJyzemmmikVCRCwvEcIttmfvJG6ZKLX8T9JbRo0OWdoG2mMNUVxEhg_Ou9-RluYI80YK7L3HLtGg9Pj4IHvcM3Y_8-OEgTP8lLwLA45ep8a9cEb47ZuMAOe_DXt0UHcm1obCgthc6AqzVYPuisLUJxFXomKXFvTTnTWF8GlCju3U-8FGhJz4CxIHhSiw8U226g_0AS9n3v2LclaA614W-XkCizzsRIJSNnbHiXODWRXTdG5VVyPh5SDYYR6AjJmubWRKf8rItXDdKflOXjPbd9SSwyDB9HgffyfHxKo_vOo5S8nJfsB8-=w1860-h968",
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
