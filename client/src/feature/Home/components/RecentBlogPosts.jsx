import "../styles/recentBlogPosts.style.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecentBlogPosts = ({ blogs }) => {
  const sortedBlogs = [...blogs].sort((a, b) => {
    return b.id - a.id;
  });

  const recentFour = sortedBlogs.slice(0, 4);

  return (
    <div className="recent-blog-posts">
      <div className="header-recent-posts">
        <h2>Latest Blogs</h2>
        <button className="see-all-recent-blog">
          <Link to="/blogs" className="see-all-recent-blog">
            Explore all posts <ArrowRight size={18} />
          </Link>
        </button>
      </div>

      <div className="blog-grid">
        {recentFour.map((blog) => (
          <div key={blog.id} className="blogs-list-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.content}</p>
            <div className="blog-footer">
              <span className="blog-creator">Author ID: {blog.user_id}</span>
              <span className="blog-date">
                {blog.created_at ? blog.created_at.split("T")[0] : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogPosts;
