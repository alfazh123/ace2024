import Link from "next/link";
import Image from "next/image";

interface DataCampusPreview {
  campusName: string;
  src: string;
  href: string;
}

export default function CampusPreview(campus: DataCampusPreview) {
  return (
    <div>
      <Link
        href={campus.href}
        passHref
        className="shadow-lg hover:shadow-2xl space-y-4 items-center flex flex-col transition duration-300 ease-in-out rounded-lg p-2 w-full"
      >
        <Image
          src={campus.src}
          alt={campus.campusName}
          width={200}
          height={300}
          className="justify-center h-60 items-center m-auto  rounded-lg w-60"
        />
        <p className="mt-3 text-lg font-semibold">{campus.campusName}</p>
      </Link>
    </div>
  );
}
