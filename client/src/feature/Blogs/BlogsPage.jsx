import { useState, useEffect } from "react";
import Blogs from "./components/Blogs";
import ApiService from "../../core/ApiService";
import "./blogsPage.style.css";

const BlogsPage = () => {
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const posts = await ApiService.getPosts();
        setCurrentBlogs(posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="no-content">
          <p>Loading blogs...</p>
        </div>
      ) : currentBlogs.length > 0 ? (
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
