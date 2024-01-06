import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Image from "next/image";
import SearchBar from "../ui/blog/search-bar";

export default function Blog(campus: any) {
  const blogDir = "campus";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <div>
      <div className="min-h-screen justify-center flex flex-col">
        <h2 className="text-4xl font-bold mt-32">Blog</h2>
        <SearchBar />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-2 gap-5 grid-cols-1 m-2">
          {blogs.map((blog) => (
            <Link
              href={`/campus/${blog.slug}`}
              passHref
              key={blog.slug}
              className="bg-slate-300 rounded-lg p-2 w-full"
            >
              <Image
                src={blog.meta.image}
                alt={blog.meta.title}
                width={200}
                height={300}
                className="justify-center h-60 items-center m-auto bg-slate-300 rounded-lg w-full"
              />
              <p>{blog.meta.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
