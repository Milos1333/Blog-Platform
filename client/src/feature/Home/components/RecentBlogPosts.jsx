import "../styles/recentBlogPosts.style.css";
import { ArrowRight } from "lucide-react";
import recentImagePost1 from "../../../assets/HomePageImages/recentBlog1.jpeg";
import recentImagePost2 from "../../../assets/HomePageImages/recentBlog2.jpeg";
import recentImagePost3 from "../../../assets/HomePageImages/recentBlog3.jpeg";
import recentImagePost4 from "../../../assets/HomePageImages/recentBlog4.jpg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Embracing the Mountain Air",
    image: recentImagePost1,
    date: "April 14, 2025",
    user: "Luka Pavlović",
  },
  {
    id: 2,
    title: "Still Reflections by the Lake",
    image: recentImagePost2,
    date: "April 13, 2025",
    user: "Ana Kovač",
  },
  {
    id: 3,
    title: "Under the Stadium Lights",
    image: recentImagePost3,
    date: "April 12, 2025",
    user: "Nikola Bajić",
  },
  {
    id: 4,
    title: "Rise of Urban Giants",
    image: recentImagePost4,
    date: "April 11, 2025",
    user: "Teodora Ilić",
  },
];

const RecentBlogPosts = () => {
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
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </div>
            <button className="button-view-more">View more</button>
            <p className="recent-blog-user">Created by: {post.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogPosts;
