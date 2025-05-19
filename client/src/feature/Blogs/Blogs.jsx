import React, { useState } from "react";
import "./blogs.style.css";
import { categories } from "../../data/categoriesData";

const Blogs = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);

  const handleCategoryClick = (id) => {
    setActiveCategoryId(id);
  };

  return (
    <div className="blogs-container">
      <div className="blogs-categories-wrapper">
        <ul className="blogs-categories-list">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`blogs-category-item ${
                category.id === activeCategoryId ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="category-name">{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="blogs-list-wrapper">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
