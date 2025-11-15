import React from "react";
import { certifications } from "../../data/data";
import "./certifications.css";

// Helper function to get provider logo
const getProviderLogo = (issuer) => {
  const provider = issuer.toLowerCase();
  if (provider.includes('aws')) return 'aws';
  if (provider.includes('coursera')) return 'coursera';
  if (provider.includes('nptel')) return 'nptel';
  return null;
};

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrapper">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-container">
          <div className="certifications-grid">
            {certifications.map((cert) => {
              const provider = getProviderLogo(cert.issuer);
              
              return (
                <article key={cert.id} className="certification-card">
                  <header className="certification-header">
                    <h3>{cert.title}</h3>
                    <span className="date">{cert.date}</span>
                  </header>
                  
                  <p className="issuer">
                    {provider && (
                      <span className="provider-logo">
                        {provider === 'aws' && '☁️'}
                        {provider === 'coursera' && '🎓'}
                        {provider === 'nptel' && '🏛️'}
                      </span>
                    )}
                    {cert.issuer}
                  </p>
                  
                  {cert.skills.length > 0 && (
                    <div className="skills">
                      {cert.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="credential-link"
                    aria-label={`View ${cert.title} credential`}
                  >
                    View Credential
                    <span className="arrow-icon" aria-hidden="true">→</span>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
