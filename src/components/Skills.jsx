import React from "react";
import "./Skills.css";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Java", icon: <FaJava />, color: "#A8B9CC" },
    { name: "C++", icon: <span className="icon-cpp">C++</span>, color: "#00599C" },
    { name: "C", icon: <span className="icon-c">C</span>, color: "#007396" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ "--skill-color": skill.color }}
            data-aos="zoom-in"
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
