import { Link } from 'react-router-dom';

function ProjectOverviewContent({ project }) {
  return (
    <article className="project-overview" aria-labelledby="project-overview-title">
      <div className="project-overview__artwork">
        <img src={project.artwork.showcase} alt="" />
      </div>
      <div className="project-overview__content">
        <p className="projects-page__eyebrow">Project Overview</p>
        <h1 id="project-overview-title">{project.title}</h1>
        <p>{project.summary}</p>
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
        <div className="project-actions">
          <Link className="project-action project-action--primary" to={`/projects/${project.slug}/showcase`}>
            View Showcase
          </Link>
          <Link
            className="project-action project-action--secondary"
            to="/projects"
            state={{ restoreProjectId: project.slug }}
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectOverviewContent;
