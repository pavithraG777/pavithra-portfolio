import React from "react";
import "./Sports.css";

const Sports = () => {
  const sports = [
    {
        name: "Badminton",
        img: "/images/bat-mitton.png",
        desc: "A fast-paced indoor sport that improves reflexes, agility, and endurance."
    },
    {
        name: "Volleyball",
        img: "/images/volly-ball.png",
        desc: "A dynamic sport that focuses on teamwork, coordination, and energy."
    },
    {
        name: "Kho-Kho",
        img: "/images/khokho.png",
        desc: "A traditional Indian sport requiring speed, focus, and quick movement skills."
    },
  ];

  return (
    <section id="sports" className="sports-section">
      <h2 className="section-title">Sports</h2>
      <div className="sports-grid">
        {sports.map((sport, index) => (
          <div className="sport-card" key={index} data-aos="zoom-in">
            <img src={sport.img} alt={sport.name} />
            <h3>{sport.name}</h3>
            <p>{sport.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sports;
