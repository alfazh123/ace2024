"use server";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Image from "next/image";
import SelectCampus from "../ui/campus/selectCampus";

export default async function Blog() {
    // {
    //     searchParams,
    // }: {
    //     searchParams: {
    //         query: string;
    //     };
    // }
    const blogDir = "campus";

    const files = fs.readdirSync(path.join(blogDir));

    const blogs = files.map((filename) => {
        const fileContent = fs.readFileSync(
            path.join(blogDir, filename),
            "utf8"
        );

        const { data: frontMatter } = matter(fileContent);
        return {
            meta: frontMatter,
            slug: filename.replace(".mdx", ""),
        };
    });

    // console.log(searchParams.query);

    return (
        <div>
            <div className={`min-h-screen justify-center flex flex-col `}>
                <h2 className="text-4xl font-bold mt-32 mb-4">Campus</h2>

                {/* <SelectCampus name={blogs.map((blog) => blog.meta.title)} /> */}

                <div
                    className={`grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-5 grid-cols-1 mb-10 `}
                >
                    {blogs.map((blog) => (
                        <Link
                            href={`/campus/${blog.slug}`}
                            passHref
                            key={blog.meta.title}
                            className={`shadow-lg bg-pewter border-solid border-2 border-oliver hover:shadow-2xl space-y-4 md:items-center flex md:flex-col md:space-x-0 space-x-4 flex-row transition duration-300 ease-in-out rounded-lg p-2 w-full`}
                        >
                            <Image
                                src={blog.meta.image}
                                alt={blog.meta.title}
                                width={200}
                                height={300}
                                className="justify-center md:h-60 md:w-60 sm:w-32 sm:h-32 h-20 w-20 md:items-center m-auto  rounded-lg"
                            />
                            <p className="text-lg md:flex hidden items-center justify-center text-center font-bold w-full">
                                {blog.meta.title}
                            </p>
                            <div className="md:hidden flex flex-col w-5/6">
                                <p className="mt-3 sm:text-lg text-sm md:font-semibold font-bold md:w-full w-5/6">
                                    {blog.meta.title}
                                </p>
                                <p>{blog.meta.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

// export async function getData() {
//     const blogDir = "campus";
//     const files = fs.readdirSync(path.join(blogDir));
//     const blogs = files.map((filename) => {
//         const fileContent = fs.readFileSync(
//             path.join(blogDir, filename),
//             "utf8"
//         );
//         // Parse the file content here
//         return {
//             filename,
//             content: fileContent,
//         };
//     });

//     return {
//         props: {
//             blogs,
//         },
//     };
// }

// export async function getStaticProps() {
//     const blogDir = "campus";
//     const files = fs.readdirSync(path.join(blogDir));
//     const blogs = files.map((filename) => {
//         const fileContent = fs.readFileSync(
//             path.join(blogDir, filename),
//             "utf8"
//         );
//         // Parse the file content here
//         return {
//             filename,
//             content: fileContent,
//         };
//     });

//     return {
//         props: {
//             blogs,
//         },
//     };
// }

// import fs from "fs";
// import path from "path";
// import Link from "next/link";
// import Image from "next/image";
// import SelectCampus from "../ui/campus/selectCampus";
// import { useSearchParams } from "next/navigation";

// export default function Blog({ blogs }) {
//     // Your component code here
// }

// export async function getStaticProps() {
//     const blogDir = "campus";
//     const files = fs.readdirSync(path.join(blogDir));
//     const blogs = files.map((filename) => {
//         const fileContent = fs.readFileSync(
//             path.join(blogDir, filename),
//             "utf8"
//         );
//         // Parse the file content here
//         return {
//             filename,
//             content: fileContent,
//         };
//     });

//     return {
//         props: {
//             blogs,
//         },
//     };
// }
