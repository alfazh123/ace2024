import Link from "next/link";

interface DataCard {
  agendaName: string;
  agendaDate: string;
  tag: string;
  src: string;
  href: string;
}

export default function AgendaCard(agenda: DataCard) {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-base-content transition duration-500 ease-in-out bg-slate-200">
      <Link href={agenda.href}>
        <div
          className="rounded-t-lg bg-cover bg-left h-32"
          style={{ backgroundImage: `url(${agenda.src})` }}
        ></div>
        <div className="flex justify-between items-center">
          <div className="p-5">
            <h3 className="text-xl font-bold">{agenda.agendaName}</h3>
            <p>{agenda.agendaDate}</p>
          </div>
          <div className="pr-4">
            <p className="rounded-full border-solid border-2 border-slate-400 px-3 py-1">
              {agenda.tag}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
