interface Schedule {
  data: {
    time: string;
    agenda: string;
  }[];
}

export default function Agenda({ data }: Schedule) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">Agenda</h3>
      <ul className="list-disc space-y-4 my-5">
        {data.map((item, index) => (
          <li key={index}>
            <div className="timeline-marker"></div>
            <div className="">
              <p className="text-md">{item.time}</p>
              <p className="text-lg font-semibold">{item.agenda}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
