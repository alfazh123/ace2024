import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Image from "next/image";
import SelectCampus from "../ui/campus/selectCampus";
import { useSearchParams } from "next/navigation";

export default function Blog({
    campus,
    searchParams,
}: {
    searchParams?: { campus?: string };
    campus: string;
}) {
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

    const search = searchParams?.campus || "";
    console.log({ search: search });

    return (
        <div>
            <div className={`min-h-screen justify-center flex flex-col`}>
                <h2 className="text-4xl font-bold mt-32 mb-4">Blog</h2>
                <SelectCampus name={blogs.map((blog) => blog.meta.title)} />
                {search ? (
                    <div>
                        <div
                            className={`grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-5 grid-cols-1 m-2 mb-10 `}
                        >
                            {blogs.map((blog) => (
                                <Link
                                    href={`/campus/${blog.slug}`}
                                    passHref
                                    key={blog.meta.title}
                                    className={`shadow-lg bg-sage hover:shadow-2xl space-y-4 items-center flex flex-col transition duration-300 ease-in-out rounded-lg p-2 w-full
                                    ${
                                        search === blog.meta.title
                                            ? ""
                                            : "hidden"
                                    }
                                    `}
                                >
                                    <Image
                                        src={blog.meta.image}
                                        alt={blog.meta.title}
                                        width={200}
                                        height={300}
                                        className="justify-center h-60 items-center m-auto  rounded-lg w-60"
                                    />
                                    <p className="mt-3 text-lg font-semibold">
                                        {blog.meta.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <div
                            className={`grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-5 grid-cols-1 m-2 mb-10 `}
                        >
                            {blogs.map((blog) => (
                                <Link
                                    href={`/campus/${blog.slug}`}
                                    passHref
                                    key={blog.meta.title}
                                    className={`shadow-lg bg-sage hover:shadow-2xl space-y-4 items-center flex flex-col transition duration-300 ease-in-out rounded-lg p-2 w-full`}
                                >
                                    <Image
                                        src={blog.meta.image}
                                        alt={blog.meta.title}
                                        width={200}
                                        height={300}
                                        className="justify-center h-60 items-center m-auto  rounded-lg w-60"
                                    />
                                    <p className="mt-3 text-lg font-semibold">
                                        {blog.meta.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
