import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/blogs.style.css";
import { categories } from "../../../data/categoriesData";
import { Paginator } from "primereact/paginator";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputSwitch } from "primereact/inputswitch";
import BlogImageDelete from "../../../assets/BlogPageImages/recycle-bin.png";
import ApiService from "../../../core/ApiService";

const Blogs = ({ blogs, setBlogs }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [first, setFirst] = useState(0);
  const rows = 8;

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmed) return;

    try {
      await ApiService.deletePost(id);
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
      console.log("Blog deleted:", id);
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog.");
    }
  };

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
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category ===
            categories.find((c) => c.id === activeCategoryId)?.name
        );

  const sortedBlogs = [...filteredBlogs].sort((a, b) => b.id - a.id);

  const currentBlogs = sortedBlogs.slice(first, first + rows);

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

      <div className="toggle-switch-container">
        <p>All</p>
        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        <p>My</p>
      </div>

      <div className="blogs-list-wrapper">
        {sortedBlogs.length === 0 ? (
          <div className="no-content-blogs">
            <p>No blogs found for the selected category.</p>
          </div>
        ) : (
          <>
            <div className="blogs-list-grid">
              {currentBlogs.map((blog) => (
                <div key={blog.id} className="blogs-list-card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-description">{blog.content}</p>
                  <div className="blog-footer">
                    <span className="blog-creator">
                      Author ID: {blog.user_id}
                    </span>
                    <span className="blog-date">
                      {blog.created_at ? blog.created_at.split("T")[0] : ""}
                    </span>
                  </div>
                  <img
                    src={BlogImageDelete}
                    alt="Icon-Delete"
                    className="blog-delete-icon"
                    onClick={() => handleDelete(blog.id)}
                  />
                </div>
              ))}
            </div>

            <Paginator
              first={first}
              rows={rows}
              totalRecords={sortedBlogs.length}
              onPageChange={(e) => setFirst(e.first)}
              className="custom-paginator"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
