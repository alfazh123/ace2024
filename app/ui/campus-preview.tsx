import Link from "next/link";
import Image from "next/image";

interface DataCampusPreview {
  campusName: string;
  src: string;
  href: string;
}

export default function CampusPreview(campus: DataCampusPreview) {
  return (
    <div className="rounded-lg text-oliver md:w-72 text-center">
      <Link
        href={campus.href}
        passHref
        className=" hover:shadow-2xl bg-sage space-y-4 items-center flex flex-col rounded-lg p-2 w-full shadow-lg transition duration-300 ease-in-out"
      >
        <Image
          src={campus.src}
          alt={campus.campusName}
          width={200}
          height={300}
          className="justify-center md:h-60 h-40 items-center m-auto  rounded-lg md:w-60 w-40"
        />
        <p className="mt-3 md:text-lg text-md font-semibold">
          {campus.campusName}
        </p>
      </Link>
    </div>
  );
}
