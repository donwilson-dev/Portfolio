import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import ProjectOverviewContent from '../components/ProjectOverviewContent.jsx';
import { getProjectBySlug, PROJECT_TRACK_SELECTED_KEY } from '../data/projects.js';
import '../styles/projects.css';

function ProjectOverview() {
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
        <section className="project-empty-state page-container" aria-labelledby="project-not-found-title">
          <p className="projects-page__eyebrow">Project Overview</p>
          <h1 id="project-not-found-title">Project not found</h1>
          <p>The requested project is not part of the current portfolio library.</p>
          <Link className="project-action project-action--primary" to="/projects">
            <img src={arrowLeftIcon} alt="" aria-hidden="true" />
            Back to Projects
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="projects-page projects-page--overview">
      <section className="project-overview-hero" aria-labelledby="project-overview-title">
        <div className="project-overview-hero__content page-container">
          <ProjectOverviewContent project={project} />
        </div>
      </section>
    </div>
  );
}

export default ProjectOverview;
