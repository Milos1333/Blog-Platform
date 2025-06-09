import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./blogs.style.css";
import { categories } from "../../data/categoriesData";
import { dummyBlogs } from "../../data/dummyBlogs";
import { Paginator } from "primereact/paginator";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Blogs = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [first, setFirst] = useState(0);
  const rows = 8;

  useEffect(() => {
    if (category) {
      const found = categories.find(
        (cat) =>
          cat.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-") ===
          category
      );
      if (found) {
        setActiveCategoryId(found.id);
      } else {
        setActiveCategoryId(1);
      }
    } else {
      setActiveCategoryId(1);
    }
    setFirst(0);
  }, [category]);

  const handleCategoryClick = (id) => {
    setActiveCategoryId(id);
    setFirst(0);
    const selectedCategory = categories.find((cat) => cat.id === id);

    if (selectedCategory && selectedCategory.id !== 1) {
      const path = selectedCategory.name
        .toLowerCase()
        .replace(/ & /g, "-")
        .replace(/\s+/g, "-");
      navigate(`/blogs/${path}`);
    } else {
      navigate("/blogs");
    }
  };

  const filteredBlogs =
    activeCategoryId === 1
      ? dummyBlogs
      : dummyBlogs.filter((blog) => blog.categoryId === activeCategoryId);

  const currentBlogs = filteredBlogs.slice(first, first + rows);

  return (
    <div className="blogs-container">
      <div className="blogs-categories-wrapper">
        <h3>Search blogs by category:</h3>
        {/* DESKTOP LIST */}
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

        {/* MOBILE DROPDOWN MENU */}
        <select
          className="blogs-categories-dropdown"
          value={activeCategoryId}
          onChange={(e) => handleCategoryClick(Number(e.target.value))}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="blogs-list-wrapper">
        <div className="blogs-list-grid">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="blogs-list-card">
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
          totalRecords={filteredBlogs.length}
          onPageChange={(e) => setFirst(e.first)}
          className="custom-paginator"
        />
      </div>
    </div>
  );
};

export default Blogs;
