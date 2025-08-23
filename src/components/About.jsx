import React from "react";
import "./About.css";
import profile from "../assets/pavi.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title" data-aos="fade-down">About Me</h2>
      <div className="about-container" data-aos="fade-up">
        <div className="about-img" data-aos="zoom-in">
          <img src={profile} alt="Pavithra" />
        </div>
        <div className="about-text" data-aos="fade-left">
        <p>
            I’m <b>Pavithra G</b>, an enthusiastic student currently pursuing my 
            <strong> B.Sc. in Data Science at Shree Ragavendhira Arts and Science College, Chidambaram.</strong>
            </p>
            <p>
            With a strong passion for technology and problem-solving, I have been developing my skills in 
            <b> Python, C, CPP, Java, HTML, CSS, and JavaScript</b>. I enjoy designing clean and user-friendly interfaces, 
            experimenting with creative ideas, and building projects that bring both <i>functionality and visual appeal</i>.
            </p>
            <p>
            Along with my academics, I have earned certifications including 
            <b> IBM Web Development Fundamentals</b> and 
            <b> Generative AI Workshop (StudAI Elev8)</b>, as well as a 
            <b> Certificate of Merit</b> for excelling in competitions. 
            These experiences have helped me strengthen my technical foundation and boost my confidence as a learner.
            </p>
            <p>
            Beyond coding, I actively take part in sports such as <b>badminton, volleyball, kho-kho, cricket, and athletics</b>, 
            which keep me energetic, motivated, and disciplined. 
            </p>
            <p>
            My ultimate goal is to grow as a developer, gain real-world experience through internships and collaborations, 
            and contribute to impactful projects. With curiosity, dedication, and a love for continuous learning, 
            I’m excited to begin my journey in the tech industry and explore new opportunities ahead.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
