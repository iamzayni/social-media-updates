function PostCard({ post }) {
  return (
    <article>
      <h3>{post?.title || "Untitled Post"}</h3>
      <p>{post?.caption || "No caption available."}</p>
    </article>
  );
}

export default PostCard;
