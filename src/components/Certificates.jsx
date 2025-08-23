import React, { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Web Development Fundamentals",
      org: "IBM SkillsBuild",
      year: "2025",
      img: "/pavithra-portfolio/certificates/ibm.png",
      link: "https://www.credly.com/badges/fb839fe4-b379-49bd-9a4c-5af9d7496ee3"
    },
    {
      title: "Generative AI Workshop (StudAI Elev8)",
      org: "StudAI Edutech Pvt. Ltd.",
      year: "2024",
      img: "/pavithra-portfolio/certificates/ai.png"
    },
    {
      title: "Certificate of Merit – I Prize (Mission Report)",
      org: "Shree Raghavendra Arts and Science College",
      year: "2024",
      img: "/pavithra-portfolio/certificates/mission-report.jpeg"
    }
  ];

  return (
    <section id="certificates" className="cert-section">
      <h2 className="section-title">Certificates</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index} data-aos="fade-up">
            <img src={cert.img} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.org} • {cert.year}</p>
            <button
              className="btn-view"
              onClick={() => setSelectedCert(cert)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="cert-modal">
          <div className="cert-modal-content">
            <button className="close-btn" onClick={() => setSelectedCert(null)}>✖</button>
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.org} • {selectedCert.year}</p>
            <img src={selectedCert.img} alt={selectedCert.title} className="cert-full" />
            <div className="modal-actions">
              <a href={selectedCert.img} download className="btn-download">⬇ Download</a>
              {selectedCert.link && (
                <a href={selectedCert.link} target="_blank" rel="noreferrer" className="btn-view">
                  Verify Online
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
