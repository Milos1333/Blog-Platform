import "../styles/creator.style.css";
import ImageCreator from "../../../assets/AboutPageImages/creatorOfBlog.jpg";

const Creator = () => {
  return (
    <>
      <div className="creator-container">
        <div className="creator-image-section"></div>
        <div className="creator-info-section">
          <h2>Everything You Need to Know About Creator</h2>
          <h4>Hi, I'm Milos Klepic</h4>
          <p>
            I'm a Frontend Developer passionate about building clean,
            responsive, and engaging web applications. This blog platform is one
            of my personal projects, created to give users a smooth and
            enjoyable experience while reading, writing, and exploring content.
          </p>
          <div className="creator-contact">
            <p>📧 milosklepic91@gmail.com</p>
            <p>📞 +387 66 466 603</p>
          </div>
        </div>
        <div className="creator-shape"></div>
      </div>
    </>
  );
};

export default Creator;
