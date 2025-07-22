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
import ApiService from "../../core/ApiService";

const CreateBlog = ({ fetchBlogs, isLoggedIn }) => {
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setImageError(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("You must be logged in to create a blog post.");
      navigate("/login");
      return;
    }

    if (!image) {
      setImageError(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image);

      const uploadResponse = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Image upload failed");
      }

      const uploadData = await uploadResponse.json();
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      const userId = loggedInUser?.id;

      const newPost = {
        user_id: userId,
        title,
        content,
        category: category?.name || "",
        image: uploadData.imageUrl,
        created_at: date ? date.toISOString().split("T")[0] : "",
      };

      await ApiService.createPost(newPost);

      if (fetchBlogs) await fetchBlogs();

      show("success", "Success", "Blog post created successfully!");
      navigate("/blogs");

      setTitle("");
      setContent("");
      setDate(null);
      setCategory(null);
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Create post error:", error);
      show("error", "Error", "Failed to create post.");
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

          <div className="form-group form-group-image ">
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
