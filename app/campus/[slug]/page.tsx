import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("campus"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("campus", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Campus({ params }: any) {
  const props = getPost(params);

  return (
    <article className="min-h-screen flex flex-col prose prose-sm md:prose-base lg:prose-lg !prose-slate progress-invert m-auto">
      <h1 className="md:mt-32 mt-32">{props.frontMatter.title}</h1>

      <div className="text-justify mb-32">
        <MDXRemote source={props.content}></MDXRemote>
      </div>
    </article>
  );
}
