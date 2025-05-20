import { useState } from "react";
import "./blogs.style.css";
import { categories } from "../../data/categoriesData";
import { dummyBlogs } from "../../data/dummyBlogs";
import { Paginator } from "primereact/paginator";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Blogs = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [first, setFirst] = useState(0);
  const rows = 6;

  const handleCategoryClick = (id) => {
    setActiveCategoryId(id);
    setFirst(0);
  };

  const currentBlogs = dummyBlogs.slice(first, first + rows);

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
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-footer">
                <span className="blog-creator">{blog.creator}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>

        <Paginator
          first={first}
          rows={rows}
          totalRecords={dummyBlogs.length}
          onPageChange={(e) => setFirst(e.first)}
          className="custom-paginator"
        />
      </div>
    </div>
  );
};

export default Blogs;
