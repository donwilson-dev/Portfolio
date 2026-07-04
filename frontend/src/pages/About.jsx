import { useRef, useState } from 'react';
import CertificateCard from '../components/CertificateCard.jsx';
import CertificateViewer from '../components/CertificateViewer.jsx';
import {
  careerBackground,
  certifications,
  professionalSummary,
  technologyGroups,
} from '../data/about.js';
import '../styles/about.css';

function About() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const lastFocusedElementRef = useRef(null);
  const lastScrollPositionRef = useRef({ left: 0, top: 0 });

  const openCertificate = (certificate) => {
    lastFocusedElementRef.current = document.activeElement;
    lastScrollPositionRef.current = {
      left: window.scrollX,
      top: window.scrollY,
    };
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    requestAnimationFrame(() => {
      window.scrollTo(lastScrollPositionRef.current.left, lastScrollPositionRef.current.top);
      lastFocusedElementRef.current?.focus({ preventScroll: true });
    });
  };

  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__content page-container">
          <header className="about-hero__summary">
            <p className="about-page__eyebrow">{professionalSummary.eyebrow}</p>
            <h1 id="about-title">{professionalSummary.title}</h1>
            <p>{professionalSummary.body}</p>
          </header>

          <section className="about-section" aria-labelledby="career-background-title">
            <div className="about-section__header">
              <p className="about-page__eyebrow">Background</p>
              <h2 id="career-background-title">{careerBackground.title}</h2>
            </div>
            <p className="about-section__body">{careerBackground.body}</p>
          </section>

          <section className="about-section" aria-labelledby="technologies-title">
            <div className="about-section__header">
              <p className="about-page__eyebrow">Capabilities</p>
              <h2 id="technologies-title">Technologies &amp; Skills</h2>
            </div>
            <div className="technology-grid">
              {technologyGroups.map((group) => (
                <article className="technology-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <ul>
                    {group.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="about-section" aria-labelledby="certifications-title">
            <div className="about-section__header">
              <p className="about-page__eyebrow">Credentials</p>
              <h2 id="certifications-title">Certifications</h2>
            </div>
            <div className="certificate-grid">
              {certifications.map((certificate) => (
                <CertificateCard
                  certificate={certificate}
                  key={certificate.id}
                  onSelect={() => openCertificate(certificate)}
                />
              ))}
            </div>
          </section>
        </div>
      </section>

      <CertificateViewer certificate={selectedCertificate} onClose={closeCertificate} />
    </div>
  );
}

export default About;
