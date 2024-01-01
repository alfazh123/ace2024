import Image from "next/image";
import Link from "next/link";

interface DataCard {
  agendaName: string;
  agendaDate: string;
  src: string;
  href: string;
}

export default function AgendaCard(agenda: DataCard) {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-base-content  bg-slate-200">
      <Link href={agenda.href}>
        <Image
          src={agenda.src}
          alt={agenda.agendaName}
          width={500}
          height={500}
          className="rounded-t-lg"
        />
        <div className="p-5">
          <h3 className="text-xl font-bold">{agenda.agendaName}</h3>
          <p>{agenda.agendaDate}</p>
        </div>
      </Link>
    </div>
  );
}
