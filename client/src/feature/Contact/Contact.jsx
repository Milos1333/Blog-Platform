import "./contact.style.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact me:</h2>
      <p className="contact-subtitle">
        I'm a Frontend Developer skilled in <span className="skill">HTML</span>,{" "}
        <span className="skill">CSS</span>,{" "}
        <span className="skill">JavaScript</span>, and{" "}
        <span className="skill">React</span>.
        <br />
        I'm currently looking for a full-time position in a company where I can
        grow, contribute, and work on meaningful projects. Let's build something
        great together!
      </p>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/klepic_m/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="www.facebook.com/milos.klepic.5"
          https:target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/milos-klepic-1b739726b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Milos1333"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> milosklepic91@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +387 66 466 603
        </p>
        <p>
          <strong>Location:</strong> Banja Luka, Bosnia and Herzegovina
        </p>
        <p>
          <strong>Looking for full-time position:</strong>{" "}
          <span className="available">Yes ✅</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
