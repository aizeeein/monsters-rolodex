const BlogList = ({blogs, title}) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <h1>{blog.body}</h1>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
