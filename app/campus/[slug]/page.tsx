import Markdown from "markdown-to-jsx";

const PostPage = (props: any) => {
  const slug = props.params.slug;
  return <div>{slug}</div>;
};

export default PostPage;
