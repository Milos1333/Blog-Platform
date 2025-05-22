import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import "./createBlog.style.css";

import { categories } from "../../data/categoriesData";

const CreateBlogPost = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [category, setCategory] = useState(null); // NOVO

  const filteredCategories = categories.filter((cat) => cat.name !== "All"); // NOVO

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      setImageError(true);
      return;
    }

    setImageError(false);
    console.log({
      author,
      title,
      content,
      date,
      category,
      image,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setImageError(false);
    }
  };

  return (
    <div className="create-post-container">
      <div className="create-post-content">
        <h2>Create a New Blog Post</h2>
        <p className="create-post-subtitle">
          Share your thoughts with the world! ✍️
        </p>

        <form onSubmit={handleSubmit} className="create-post-form">
          <div className="form-group">
            <label htmlFor="author">Author (Full Name)</label>
            <InputText
              id="author"
              value={author}
              onChange={(e) => {
                const input = e.target.value;
                const onlyLetters = input.replace(/[0-9]/g, "");
                setAuthor(onlyLetters);
              }}
              placeholder="Enter your full name"
              required
              maxLength={50}
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Blog Title</label>
            <InputText
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the blog post title"
              required
              maxLength={50}
            />
          </div>

          {/* DODAT Dropdown za kategorije */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <Dropdown
              id="category"
              value={category}
              onChange={(e) => setCategory(e.value)}
              options={filteredCategories}
              optionLabel="name"
              placeholder="Select a category"
              itemTemplate={(option) => <div>{option.name}</div>}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <InputTextarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              placeholder="Write your post content here..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Creation Date</label>
            <Calendar
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Press to select a date"
              required
            />
          </div>

          <div className="form-group form-group-image">
            <label htmlFor="image">Cover Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="input-image"
            />
            {imageError && (
              <small className="error-message">Cover image is required.</small>
            )}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="image-preview"
                style={{
                  marginTop: "10px",
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
              />
            )}
          </div>

          <Button
            type="submit"
            label="Create Post"
            className="submit-post-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPost;
