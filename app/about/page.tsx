import Image from "next/image";

export default function About() {
    return (
        <div className="space-y-10 mb-10">
            <header className="flex flex-col py-10">
                <h1 className="text-6xl font-bold mt-32 w-full">
                    About ACE 2024
                </h1>
            </header>

            <div className="md:grid md:grid-cols-2 md:space-y-0 space-y-10">
                <div>
                    <h3 className="text-3xl font-semibold ">What is ACE</h3>
                    <p className="text-lg text-justify">
                        ACE atau Assa&apos;adah Campus Expo merupakan sebuah
                        acara campus expo yang diadakan oleh IKBAL yang
                        bertujuan untuk memberikan gambaran kepada siswa-siswa
                        SMA, MA, dan SMK Assa&apos;adah menganai kampus-kampus
                        yang ada di Indonesia. Dengan adanya acara ini,
                        diharapkan siswa-siswa dapat mengetahui kampus yang
                        sesuai dengan minat dan bakat mereka. Acara ini juga
                        bertujuan untuk memberikan gambaran kepada siswa-siswa
                        mengenai dunia perkuliahan yang sesungguhnya, sehingga
                        siswa-siswa dapat mempersiapkan diri sebelum memasuki
                        dunia perkuliahan.
                    </p>
                </div>
                <Image
                    src="/about/poster-ace-2024.png"
                    alt="ACE 2024"
                    width={300}
                    height={100}
                    className="justify-center h-96 items-center m-auto bg-slate-300 rounded-lg"
                />
            </div>

            <div className="md:grid md:grid-cols-2">
                <div className="ml-5">
                    <h3 className="text-3xl font-semibold ">Why is ACE</h3>
                    <p className="text-lg text-justify">
                        Dari tahun ke tahun, banyak siswa-siswa yang bingung
                        dalam memilih kampus atau jurusan yang sesuai dengan
                        minat dan bakat mereka. Hal ini dikarenakan kurangnya
                        informasi mengenai kampus-kampus yang ada di Indonesia.
                        Oleh karena itu, ACE hadir untuk memberikan informasi
                        mengenai kampus-kampus yang ada di Indonesia. Dengan
                        adanya informasi ini, diharapkan siswa-siswa dapat
                        mengetahui kampus yang sesuai dengan minat dan bakat
                        mereka. Dari ACE tahun lalu didapati banyak siswa yang
                        terbantu atas informasi yang diberikan oleh di acara
                        ini.
                    </p>
                </div>
            </div>
        </div>
    );
}
