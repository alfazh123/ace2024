const dataFAQ = [
    {
        question: "Apa itu ACE?",
        answer: "ACE atau Assa'adah Campus Expo merupakan sebuah acara campus expo yang diadakan oleh IKBAL yang bertujuan untuk memberikan gambaran kepada siswa-siswa SMA, MA, dan SMK Assa'adah menganai kampus-kampus yang ada di Indonesia. Dengan adanya acara ini, diharapkan siswa-siswa dapat mengetahui kampus yang sesuai dengan minat dan bakat mereka. Acara ini juga bertujuan untuk memberikan gambaran kepada siswa-siswa mengenai dunia perkuliahan yang sesungguhnya, sehingga siswa-siswa dapat mempersiapkan diri sebelum memasuki dunia perkuliahan.",
    },
    {
        question: "Kapan Acaranya",
        answer: "Acara ini akan dilaksanakan pada tanggal 27-28 Januari 2024.",
    },
    {
        question: "Kampus apa saja yang ikut?",
        answer: "Kampus yang ikut di acara ini tenntunya kampus yang memiliki ikatan dengan IKBAL, untuk info lebih lanjutnya kalian bisa cek di halaman kampus yang tertera di website ini.",
    },
    {
        question: "Apa saja yang bisa didapatkan?",
        answer: "Yang akan kalian dapatkan dari acara ini diantaranya pandangan mengenai kampus dan jurusan yang kalian minati auat lalian juga jadi tau kampus dan jurusan mana yang akan kalian masuki nantinya.",
    },
    {
        question: "Dimana lokasi acaranya?",
        answer: "Lokasinya berada pada Aula Yayasan Pondok Pesantren Qomaruddin.",
    },
    {
        question: "Untuk Jadwalnya bagaimana?",
        answer: "Jadwal dari acara ini dapat kalian lihat di halaman utama yang tertera di website ini, baik dhari pertama maupun yang kedua.",
    },
];

export default function FAQ() {
    return (
        <div className="flex flex-col">
            {dataFAQ.map((item, index) => (
                <details
                    key={index}
                    className="border-solid border-x-2 border-t-2 last:border-b-2 cursor-pointer rounded-md scroll-smooth border-oliver collapse flex flex-col"
                >
                    <summary className="md:text-2xl font-semibold bg-slate-100 rounded-lg px-3 py-2">
                        {item.question}
                    </summary>
                    <ul className="md:text-lg text-sm rounded-md bg-slate-200 px-4 py-3">
                        <li>{item.answer}</li>
                    </ul>
                </details>
            ))}
        </div>
    );
}
