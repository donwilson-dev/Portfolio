import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import externalIcon from '../assets/icons/external.svg';
import githubIcon from '../assets/icons/github.svg';
import ShowcaseSection from '../components/ShowcaseSection.jsx';
import { getProjectBySlug, PROJECT_TRACK_SELECTED_KEY } from '../data/projects.js';
import '../styles/projects.css';

function ApplicationShowcase() {
  const { projectId } = useParams();
  const project = getProjectBySlug(projectId);

  useEffect(() => {
    if (project) {
      sessionStorage.setItem(PROJECT_TRACK_SELECTED_KEY, project.slug);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="projects-page projects-page--detail">
        <section className="project-empty-state page-container" aria-labelledby="showcase-not-found-title">
          <p className="projects-page__eyebrow">Application Showcase</p>
          <h1 id="showcase-not-found-title">Showcase not found</h1>
          <p>The requested showcase is not part of the current portfolio library.</p>
          <Link className="project-action project-action--primary" to="/projects">
            Back to Projects
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="projects-page projects-page--detail">
      <article className="project-showcase page-container" aria-labelledby="showcase-title">
        <header className="showcase-hero">
          <div className="showcase-hero__content">
            <p className="projects-page__eyebrow">Application Showcase</p>
            <h1 id="showcase-title">{project.title}</h1>
            <p>{project.showcase.overview}</p>
            <div className="project-actions">
              <Link className="project-action project-action--secondary" to={`/projects/${project.slug}`}>
                Back to Overview
              </Link>
              <a
                className="project-action project-action--primary"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="" aria-hidden="true" />
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="showcase-hero__artwork">
            <img src={project.artwork.showcase} alt="" />
          </div>
        </header>

        <ShowcaseSection title="Project Overview">
          <p>{project.summary}</p>
          <div className="showcase-meta-grid">
            <dl className="project-meta">
              <div>
                <dt>Status</dt>
                <dd>{project.status}</dd>
              </div>
              <div>
                <dt>Technology Stack</dt>
                <dd>{project.technologyStack.join(', ')}</dd>
              </div>
            </dl>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="Demo Walkthrough">
          {project.screenshots.length > 0 ? (
            <div className="screenshot-grid">
              {project.screenshots.map((screenshot) => (
                <figure className="screenshot-card" key={screenshot.title}>
                  <img src={screenshot.image} alt={`${project.title} ${screenshot.title} screenshot`} loading="lazy" />
                  <figcaption>
                    <span>{screenshot.title}</span>
                    {screenshot.description}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="showcase-placeholder">
              <img src={project.artwork.showcase} alt="" loading="lazy" />
              <p>{project.screenshotPlaceholder}</p>
            </div>
          )}
        </ShowcaseSection>

        <ShowcaseSection title="Features">
          <ul className="showcase-list">
            {project.showcase.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </ShowcaseSection>

        <ShowcaseSection title="Architecture">
          <ul className="showcase-list">
            {project.showcase.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ShowcaseSection>

        <ShowcaseSection title="Release Notes">
          <ul className="showcase-list">
            {project.showcase.releaseNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ShowcaseSection>

        <ShowcaseSection title="Lessons Learned">
          <ul className="showcase-list">
            {project.showcase.lessonsLearned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ShowcaseSection>

        <ShowcaseSection title="GitHub Repository">
          <a className="showcase-repository" href={project.githubUrl} target="_blank" rel="noreferrer">
            <span>
              <img src={githubIcon} alt="" aria-hidden="true" />
              {project.githubStatus}
            </span>
            <img src={externalIcon} alt="" aria-hidden="true" />
          </a>
        </ShowcaseSection>
      </article>
    </div>
  );
}

export default ApplicationShowcase;
