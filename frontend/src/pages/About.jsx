import { useRef, useState } from 'react';
import cloudIcon from '../assets/icons/cloud.svg';
import codeIcon from '../assets/icons/code.svg';
import certificationIcon from '../assets/icons/certification-diploma-proof-svgrepo-com.svg';
import databaseIcon from '../assets/icons/database.svg';
import datastoreIcon from '../assets/icons/datastore-svgrepo-com.svg';
import leadershipIcon from '../assets/icons/leadership.svg';
import monitorIcon from '../assets/icons/monitor-smartphone.svg';
import reactIcon from '../assets/icons/react.svg';
import rocketIcon from '../assets/icons/rocket.svg';
import shieldIcon from '../assets/icons/shield-check.svg';
import starIcon from '../assets/icons/star.svg';
import toolboxIcon from '../assets/icons/toolbox.svg';
import usafIcon from '../assets/icons/usaf.svg';
import CertificateCard from '../components/CertificateCard.jsx';
import CertificateViewer from '../components/CertificateViewer.jsx';
import {
  careerBackground,
  certifications,
  professionalSummary,
  technologyGroups,
} from '../data/about.js';
import '../styles/about.css';

const iconMap = {
  certification: certificationIcon,
  cloud: cloudIcon,
  code: codeIcon,
  database: databaseIcon,
  datastore: datastoreIcon,
  leadership: leadershipIcon,
  monitor: monitorIcon,
  react: reactIcon,
  rocket: rocketIcon,
  shield: shieldIcon,
  star: starIcon,
  toolbox: toolboxIcon,
  usaf: usafIcon,
};

function MaskedIcon({ className = '', icon, label }) {
  if (icon === 'usaf') {
    return (
      <img
        alt={label ?? ''}
        aria-hidden={label ? undefined : true}
        className={`about-image-icon ${className}`}
        src={iconMap[icon]}
      />
    );
  }

  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={`about-icon ${className}`}
      role={label ? 'img' : undefined}
      style={{ '--about-icon-url': `url("${iconMap[icon]}")` }}
    />
  );
}

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
          <div className="about-intro">
            <header className="about-intro__copy">
              <h1 id="about-title">{professionalSummary.title}</h1>
              <p className="about-intro__tagline">{professionalSummary.tagline}</p>
              <p className="about-intro__body">{professionalSummary.body}</p>
            </header>

            <aside className="mission-card" aria-labelledby="mission-title">
              <MaskedIcon className="mission-card__icon" icon="star" />
              <div>
                <h2 id="mission-title">My Mission</h2>
                <p>{professionalSummary.mission}</p>
              </div>
            </aside>
          </div>

          <section className="background-panel" aria-labelledby="career-background-title">
            <div className="about-section__header about-section__header--line">
              <MaskedIcon className="about-section__icon" icon="shield" />
              <h2 id="career-background-title">{careerBackground.title}</h2>
            </div>
            <div className="background-timeline">
              {careerBackground.milestones.map((milestone) => (
                <article className="timeline-item" key={milestone.title}>
                  <MaskedIcon className="timeline-item__icon" icon={milestone.icon} />
                  <span className="timeline-item__dot" />
                  <h3>{milestone.title}</h3>
                  <p>{milestone.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-section" aria-labelledby="technologies-title">
            <div className="about-section__header about-section__header--inline">
              <MaskedIcon className="about-section__icon" icon="monitor" />
              <h2 id="technologies-title">Technologies &amp; Skills</h2>
              <p>Technologies I use to build, solve problems, and deliver results.</p>
            </div>
            <div className="technology-grid">
              {technologyGroups.map((group) => (
                <article className={`technology-group technology-group--${group.tone}`} key={group.category}>
                  <div className="technology-group__header">
                    <MaskedIcon className="technology-group__icon" icon={group.icon} />
                    <h3>{group.category}</h3>
                  </div>
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
            <div className="about-section__header certifications-header">
              <MaskedIcon className="about-section__icon" icon="certification" />
              <h2 id="certifications-title">Certifications</h2>
              <p>Industry-recognized certifications validating my skills and knowledge.</p>
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
