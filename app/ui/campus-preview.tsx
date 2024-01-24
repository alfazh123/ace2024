import Link from "next/link";
import Image from "next/image";

interface DataCampusPreview {
    campusName: string;
    src: string;
    href: string;
}

export default function CampusPreview(campus: DataCampusPreview) {
    return (
        <div className="rounded-lg text-oliver md:w-72 md:text-center">
            <Link
                href={campus.href}
                passHref
                className=" hover:shadow-2xl bg-pewter border-solid border-2 md:space-x-0 space-x-4 border-oliver space-y-4 items-center flex md:flex-col flex-row rounded-lg p-2 w-full shadow-lg transition duration-300 ease-in-out"
            >
                <Image
                    src={campus.src}
                    alt={campus.campusName}
                    width={200}
                    height={300}
                    className="justify-center items-center m-auto  rounded-lg md:w-60 sm:w-40 w-32 md:h-60 sm:h-40 h-32"
                />
                <p className="mt-3 md:text-lg text-md font-semibold md:w-full w-5/6">
                    {campus.campusName}
                </p>
            </Link>
        </div>
    );
}
