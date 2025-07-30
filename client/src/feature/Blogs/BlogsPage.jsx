import Blogs from "./components/Blogs";
import "./blogsPage.style.css";

const BlogsPage = ({ blogs, loading, setBlogs, username }) => {
  return (
    <div className="blog-main-posts-container">
      {loading ? (
        <div className="no-content">
          <p>Loading blogs...</p>
        </div>
      ) : blogs.length > 0 ? (
        <Blogs blogs={blogs} setBlogs={setBlogs} username={username} />
      ) : (
        <div className="no-content">
          <p>No blogs available.</p>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
