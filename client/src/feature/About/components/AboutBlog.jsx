import "../styles/aboutBlog.style.css";

const AboutBlog = () => {
  return (
    <div className="blog-review-wrapper">
      <div className="title-container">
        <div className="vertical-line" />
        <h2 className="about-title">About the blog application</h2>
        <div className="vertical-line" />
      </div>

      <div className="about-content">
        <p>
          The blog application I developed serves as your personal creative
          playground. It allows you to easily create blog posts, edit them in
          your own style, bookmark your favorite texts for later, and search
          through everything by clearly defined categories. It's designed for
          everyone who wants to express their thoughts, share ideas, and
          organize their content in a clean and modern way. Whether you're
          writing about technology, workouts, music, or everyday life, this
          platform is here to support your voice.
        </p>
      </div>
      <div className="fun-footer">
        <p>
          ✨ Built with love in React, Node.js, and lots of late-night coffee
          ☕💻
        </p>
        <p>
          ⚠️ Warning: This app may cause a sudden urge to write blog posts at
          3:00 AM.
        </p>
      </div>
    </div>
  );
};

export default AboutBlog;
