const dataFAQ = [
  {
    question: "Apa itu ACE?",
    answer:
      "Enim adipisicing magna fugiat voluptate culpa reprehenderit magna esse. Reprehenderit cupidatat nostrud culpa magna deserunt irure laboris amet sint. Fugiat ad nisi esse dolor sit. Est id elit anim cillum esse eu veniam aliqua dolor ex adipisicing aute excepteur.",
  },
  {
    question: "Kapan Acaranya",
    answer:
      "Enim adipisicing magna fugiat voluptate culpa reprehenderit magna esse. Reprehenderit cupidatat nostrud culpa magna deserunt irure laboris amet sint. Fugiat ad nisi esse dolor sit. Est id elit anim cillum esse eu veniam aliqua dolor ex adipisicing aute excepteur.",
  },
  {
    question: "Kampus apa saja yang ikut?",
    answer:
      "Enim adipisicing magna fugiat voluptate culpa reprehenderit magna esse. Reprehenderit cupidatat nostrud culpa magna deserunt irure laboris amet sint. Fugiat ad nisi esse dolor sit. Est id elit anim cillum esse eu veniam aliqua dolor ex adipisicing aute excepteur.",
  },
  {
    question: "Apa saja yang bisa didapatkan?",
    answer:
      "Enim adipisicing magna fugiat voluptate culpa reprehenderit magna esse. Reprehenderit cupidatat nostrud culpa magna deserunt irure laboris amet sint. Fugiat ad nisi esse dolor sit. Est id elit anim cillum esse eu veniam aliqua dolor ex adipisicing aute excepteur.",
  },
  {
    question: "Dimana lokasi acaranya?",
    answer:
      "Enim adipisicing magna fugiat voluptate culpa reprehenderit magna esse. Reprehenderit cupidatat nostrud culpa magna deserunt irure laboris amet sint. Fugiat ad nisi esse dolor sit. Est id elit anim cillum esse eu veniam aliqua dolor ex adipisicing aute excepteur.",
  },
  {
    question: "Kalau berasal dari jurusan IPA apa boleh ikut sesi SOSHUM?",
    answer:
      "Enim adipisicing magna fugiat voluptate culpa reprehenderit magna esse. Reprehenderit cupidatat nostrud culpa magna deserunt irure laboris amet sint. Fugiat ad nisi esse dolor sit. Est id elit anim cillum esse eu veniam aliqua dolor ex adipisicing aute excepteur.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-10 flex flex-col">
        <h1 className="mt-32 text-6xl font-bold">FAQ</h1>
      </header>

      <div className="flex flex-col">
        {dataFAQ.map((item, index) => (
          <details className="mb-5 dropdown flex flex-col -z-0">
            <summary className="text-3xl font-semibold bg-slate-100 rounded-lg px-3 py-2">
              {item.question}
            </summary>
            <ul className="text-lg rounded-md bg-slate-200 px-4 py-3">
              <li>{item.answer}</li>
            </ul>
          </details>
        ))}
        {/* {dataFAQ.map((item, index) => (
          <div className="collapse">
            <input type="checkbox" />
            <h3 className="collapse-title text-3xl font-semibold bg-slate-100 rounded-lg px-3 py-2">
              {item.question}
            </h3>
            <div className="collapse-content text-lg rounded-md bg-slate-200 px-4 py-3">
              <p>{item.answer}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
