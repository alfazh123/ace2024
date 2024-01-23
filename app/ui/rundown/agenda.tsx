interface Schedule {
    name: string;
    data: {
        time: string;
        agenda: string;
    }[];
}

export default function Agenda({ data, name }: Schedule) {
    return (
        <div className="mb-10 md:max-w-96">
            <h3 className="text-2xl font-semibold ml-4">{name}</h3>
            <ul className="list-disc ml-4">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="border-solid border-t-2 border-oliver last:border-b-2 h-18"
                    >
                        <div className="timeline-marker"></div>
                        <div className="">
                            <p className="text-lg font-semibold">
                                {item.agenda}
                            </p>
                            <p className="text-md italic">{item.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
