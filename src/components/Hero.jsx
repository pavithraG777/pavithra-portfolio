// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/pavi.png"; // <-- your photo
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Frontend Developer", "Python Enthusiast", "Creative Coder"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero">
        <div className="decor decor-left"></div>
        <div className="decor decor-right"></div>
      <div className="hero-text">
        <h1>Hello, I'm <span>Pavithra G</span></h1>
        <h2><span ref={typedEl}></span></h2>
        <p>Attended Shree Ragavendhira Arts and Science College, Chidambaram, Tamil Nadu, India</p>
        <div className="socials">
          <a href="https://github.com/pavithraG777" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pavithra-g-ba92b4339" target="_blank"><FaLinkedin /></a>
          <a href="mailto:pavithrapavig777@gmail.com"><FaEnvelope /></a>
        </div>
        <a href="/pavithra-portfolio/cv/Pavithra-CV.pdf" className="btn">Download CV</a>
      </div>

      <div className="hero-img">
        <img src={profile} alt="Pavithra" />
      </div>
    </section>
  );
};
export default Hero;
