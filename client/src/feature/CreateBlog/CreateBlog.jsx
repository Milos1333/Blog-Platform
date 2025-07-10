import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import "./createBlog.style.css";
import { categories } from "../../data/categoriesData";
import { useToast } from "../../components/Toast/Toast";

const CreateBlog = ({ addNewBlog }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [category, setCategory] = useState(null);
  const { show } = useToast();

  const navigate = useNavigate();
  const filteredCategories = categories.filter((cat) => cat.name !== "All");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      setImageError(true);
      return;
    }

    setImageError(false);

    const newPost = {
      id: Date.now(),
      author,
      title,
      content,
      date: date ? date.toLocaleDateString() : "",
      category: category ? category.name : "",
      image: imagePreview,
      description: content.slice(0, 100) + "...",
      creator: author,
    };

    addNewBlog(newPost);
    show("success", "Success", "Blog post created successfully!");
    navigate("/blogs");

    // Reset form
    setAuthor("");
    setTitle("");
    setContent("");
    setDate(null);
    setCategory(null);
    setImage(null);
    setImagePreview(null);
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
              maxLength={15}
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
              onChange={(e) => setDate(e.value)}
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

export default CreateBlog;
