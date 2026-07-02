import { Link } from 'react-router-dom';

function ProjectCard({ project, isSelected, onSelect }) {
  return (
    <Link
      className={isSelected ? 'project-card project-card--selected' : 'project-card'}
      data-project-slug={project.slug}
      to={`/projects/${project.slug}`}
      onClick={onSelect}
      aria-label={`View ${project.title} project overview`}
      draggable="false"
    >
      <span className="project-card__artwork">
        <img src={project.artwork.card} alt="" loading="lazy" draggable="false" />
      </span>
      <span className="project-card__content">
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__status">{project.status}</span>
      </span>
    </Link>
  );
}

export default ProjectCard;
