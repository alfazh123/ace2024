import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-10 mb-10">
      <header className="flex flex-col py-10">
        <h1 className="text-6xl font-bold mt-32 w-full">About ACE 2024</h1>
      </header>

      <div className="md:grid md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-semibold ">What is ACE</h3>
          <p className="text-lg text-justify">
            Excepteur proident occaecat exercitation irure sit sit ipsum aute
            nostrud minim magna nostrud labore sunt. Magna Lorem ea id dolore ut
            aliquip fugiat est proident excepteur laboris laborum ullamco sunt.
            Labore esse nostrud exercitation deserunt laborum eu laborum dolor
            anim velit nostrud sint et mollit. Deserunt excepteur minim ut
            nostrud. Eiusmod ad id sit non cupidatat et ullamco ex aute enim
            incididunt cupidatat. Magna est eu in aliquip aute do anim
            adipisicing voluptate voluptate aliquip ad. Ipsum quis elit aliqua
            ullamco tempor ex adipisicing incididunt. Veniam ea ea amet nisi
            sint exercitation.
          </p>
        </div>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={300}
          height={100}
          className="justify-center h-96 items-center m-auto bg-slate-300 rounded-lg"
        />
      </div>

      <div className="md:grid md:grid-cols-2">
        <div className="ml-5">
          <h3 className="text-3xl font-semibold ">Why is ACE</h3>
          <p className="text-lg text-justify">
            Excepteur proident occaecat exercitation irure sit sit ipsum aute
            nostrud minim magna nostrud labore sunt. Magna Lorem ea id dolore ut
            aliquip fugiat est proident excepteur laboris laborum ullamco sunt.
            Labore esse nostrud exercitation deserunt laborum eu laborum dolor
            anim velit nostrud sint et mollit. Deserunt excepteur minim ut
            nostrud. Eiusmod ad id sit non cupidatat et ullamco ex aute enim
            incididunt cupidatat. Magna est eu in aliquip aute do anim
            adipisicing voluptate voluptate aliquip ad. Ipsum quis elit aliqua
            ullamco tempor ex adipisicing incididunt. Veniam ea ea amet nisi
            sint exercitation.
          </p>
        </div>
      </div>
    </div>
  );
}
