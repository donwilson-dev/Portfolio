import { Link } from 'react-router-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import checkIcon from '../assets/icons/check.svg';
import codeIcon from '../assets/icons/code.svg';
import warningIcon from '../assets/icons/warning.svg';

function ProjectOverviewContent({ project }) {
  const statusIcon = project.status === 'Completed' ? checkIcon : warningIcon;

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
            <dd>
              <img src={statusIcon} alt="" aria-hidden="true" />
              {project.status}
            </dd>
          </div>
          <div>
            <dt>
              <img src={codeIcon} alt="" aria-hidden="true" />
              Technology Stack
            </dt>
            <dd>{project.technologyStack.join(', ')}</dd>
          </div>
        </dl>
        <div className="project-actions">
          <Link className="project-action project-action--primary" to={`/projects/${project.slug}/showcase`}>
            View Showcase
            <img src={arrowRightIcon} alt="" aria-hidden="true" />
          </Link>
          <Link
            className="project-action project-action--secondary"
            to="/projects"
            state={{ restoreProjectId: project.slug }}
          >
            <img src={arrowLeftIcon} alt="" aria-hidden="true" />
            Back to Projects
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectOverviewContent;
