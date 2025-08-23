import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">
        I’d love to connect! Whether you have a question, want to collaborate, or just say hi — 
        feel free to reach out.
      </p>

      <div className="contact-cards">
        <a href="mailto:pavithrapavig777@gmail.com" className="contact-card" data-aos="fade-up">
          <FaEnvelope className="icon" />
          <span>Email</span>
          <p>pavithrapavig777@gmail.com</p>
        </a>

        <a href="https://www.linkedin.com/in/pavithra-g-ba92b4339" target="_blank" className="contact-card" data-aos="fade-up">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
          <p>Pavithra G</p>
        </a>

        <a href="https://github.com/pavithraG777" target="_blank" className="contact-card" data-aos="fade-up">
          <FaGithub className="icon" />
          <span>GitHub</span>
          <p>pavithraG777</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
