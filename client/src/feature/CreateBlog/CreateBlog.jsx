import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import "./createBlog.style.css";

const CreateBlogPost = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ author, title, content, date });
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

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <InputTextarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              placeholder="Write your post content here..."
              required
              maxLength={1000}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Creation Date</label>
            <Calendar
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Press to select a date"
            />
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
