import { useState } from "react";
import BlogList from "./blog-list";

const HomePage = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Internet",
      body: "lorem ipsum",
      author: "zein",
      id: 1,
    },
    {
      title: "Download",
      body: "lorem ipsum",
      author: "steven",
      id: 2,
    },
    {
      title: "Manager",
      body: "lorem ipsum",
      author: "zein",
      id: 3,
    },
  ]);

  return (
    <div className="blog-list">
      <BlogList blogs={blogs} title="All title" />
    </div>
  );
};

export default HomePage;
