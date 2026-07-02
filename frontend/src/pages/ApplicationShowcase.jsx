import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScreenshotWalkthrough from '../components/ScreenshotWalkthrough.jsx';
import ShowcaseList from '../components/ShowcaseList.jsx';
import ShowcaseRepositoryLink from '../components/ShowcaseRepositoryLink.jsx';
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
              <ShowcaseRepositoryLink project={project} />
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

        <ShowcaseSection title={project.showcase.screenshotsLabel}>
          <ScreenshotWalkthrough project={project} />
        </ShowcaseSection>

        <ShowcaseSection title={project.showcase.featuresTitle}>
          <ShowcaseList ariaLabel={`${project.title} features`} items={project.showcase.features} />
        </ShowcaseSection>

        <ShowcaseSection title="Architecture">
          <p>{project.showcase.architectureSummary}</p>
          <ShowcaseList ariaLabel={`${project.title} architecture summary`} items={project.showcase.architecture} />
        </ShowcaseSection>

        <ShowcaseSection title={project.showcase.releaseNotesTitle}>
          <ShowcaseList ariaLabel={`${project.title} release notes`} items={project.showcase.releaseNotes} ordered />
        </ShowcaseSection>

        <ShowcaseSection title={project.showcase.lessonsTitle}>
          <ShowcaseList ariaLabel={`${project.title} lessons learned`} items={project.showcase.lessonsLearned} />
        </ShowcaseSection>

      </article>
    </div>
  );
}

export default ApplicationShowcase;
