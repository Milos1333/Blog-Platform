import Blogs from "./components/Blogs";
import "./blogsPage.style.css";

const BlogsPage = ({ blogs, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="no-content">
          <p>Loading blogs...</p>
        </div>
      ) : blogs.length > 0 ? (
        <Blogs blogs={blogs} />
      ) : (
        <div className="no-content">
          <p>No blogs available.</p>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
