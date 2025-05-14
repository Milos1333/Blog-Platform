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
          Share your thoughts with the world ✍️
        </p>

        <form onSubmit={handleSubmit} className="create-post-form">
          <div className="form-group">
            <label htmlFor="author">Author (Ime i Prezime)</label>
            <InputText
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Unesi svoje ime i prezime"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Naslov Bloga</label>
            <InputText
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Unesi naslov blog posta"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Sadržaj</label>
            <InputTextarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              placeholder="Ovdje napiši tekst svog posta..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Datum Kreiranja</label>
            <Calendar
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              showIcon
            />
          </div>

          <Button
            type="submit"
            label="✅ Kreiraj Post"
            className="submit-post-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPost;
