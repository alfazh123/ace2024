import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

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
        <h2 className="text-4xl font-bold">Blog</h2>
        {blogs.map((blog) => (
          <Link href={`/campus/${blog.slug}`} passHref key={blog.slug}>
            <p>{blog.meta.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
