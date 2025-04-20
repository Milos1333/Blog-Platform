import React from "react";
import { Link } from "react-router-dom";
import "../styles/blogCategories.style.css";

const categories = [
  { id: 1, name: "Programming", emoji: "💻" },
  { id: 2, name: "Design", emoji: "🎨" },
  { id: 3, name: "Technology", emoji: "🧠" },
  { id: 4, name: "Personal Growth", emoji: "🌱" },
  { id: 5, name: "Career & Work", emoji: "📈" },
  { id: 6, name: "Reviews", emoji: "📝" },
];

const BlogCategories = () => {
  return (
    <div className="blog-categories">
      <div className="header-blog-categories">
        <h2>Browse by Category</h2>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={`/category/${category.name
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/\s+/g, "-")}`}
            key={category.id}
            className="category-card"
          >
            <div className="category-emoji">{category.emoji}</div>
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
