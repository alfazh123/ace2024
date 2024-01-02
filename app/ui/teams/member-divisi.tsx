import Image from "next/image";

interface MemberDivisiProps {
  name: string;
  role: string;
  divisi: string;
  src: string;
}

export default function MemberDivisi(data: MemberDivisiProps) {
  return (
    <div className="flex flex-col shadow-md hover:shadow-2xl transition duration-500 ease-in-out">
      <Image
        src={data.src}
        alt={data.name}
        width={300}
        height={100}
        className="justify-center h-96 items-center m-auto bg-slate-300 rounded-lg"
      />
      <div className="px-3 py-2">
        <p className="font-bold text-lg">{data.name}</p>
        <p className="font-semibold text-md">{data.role}</p>
      </div>
    </div>
  );
}
