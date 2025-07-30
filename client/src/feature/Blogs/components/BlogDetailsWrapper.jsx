import { useState } from "react";
import "../styles/blogDetailsWrapper.style.css";
import { useNavigate } from "react-router-dom";

const BlogDetailsWrapper = ({ blog }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const navigate = useNavigate();
  if (!blog) {
    return <div className="blog-details-container">Loading...</div>;
  }

  return (
    <div className="blog-details-wrapper">
      <div className="blog-details-container">
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-details-image"
          onClick={() => setIsPreviewOpen(true)}
        />
        <h1 className="blog-details-title">{blog.title}</h1>
        <div className="blog-details-content">{blog.content}</div>
        <div className="blog-details-footer">
          <span className="blog-details-author">By: {blog.username}</span>
          <span className="blog-details-date">
            Date added : {blog.created_at ? blog.created_at.split("T")[0] : ""}
          </span>
        </div>
        {/* Fullscreen preview on click */}
        {isPreviewOpen && (
          <div
            className="image-preview-overlay"
            onClick={() => setIsPreviewOpen(false)}
          >
            <img
              src={blog.image}
              alt="Preview"
              className="image-preview-full"
            />
          </div>
        )}
        <button className="back-button" onClick={() => navigate("/blogs")}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default BlogDetailsWrapper;
