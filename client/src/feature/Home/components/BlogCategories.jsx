import { Link } from "react-router-dom";
import "../styles/blogCategories.style.css";
import { categories } from "../../../data/categoriesData";

const BlogCategories = () => {
  return (
    <div className="blog-categories">
      <div className="header-blog-categories">
        <h2>Browse by Category</h2>
      </div>

      <div className="categories-grid">
        {categories.slice(1).map((category) => (
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
