import { useState, useEffect } from "react";
import Blogs from "./components/Blogs";
import "./blogsPage.style.css";

const BlogsPage = ({ blogs }) => {
  const [currentBlogs, setCurrentBlogs] = useState(blogs);

  useEffect(() => {
    setCurrentBlogs(blogs);
  }, [blogs]);

  return (
    <div>
      {currentBlogs.length > 0 ? (
        <Blogs blogs={currentBlogs} />
      ) : (
        <div className="no-content">
          <p>No blogs available.</p>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
