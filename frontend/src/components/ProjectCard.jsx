import { Link } from 'react-router-dom';

function ProjectCard({ project, isSelected, onSelect, trackSet, trackIndex }) {
  const cardContent = (
    <>
      <span className="project-card__artwork">
        <img src={project.artwork.card} alt="" loading="lazy" draggable="false" />
      </span>
      <span className="project-card__content">
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__status">{project.status}</span>
      </span>
    </>
  );

  if (project.isPlaceholder) {
    return (
      <article
        className="project-card project-card--placeholder"
        data-project-slug={project.slug}
        data-track-set={trackSet}
        data-track-index={trackIndex}
        aria-label={`${project.title} placeholder`}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <Link
      className={isSelected ? 'project-card project-card--selected' : 'project-card'}
      data-project-slug={project.slug}
      data-track-set={trackSet}
      data-track-index={trackIndex}
      to={`/projects/${project.slug}`}
      onClick={onSelect}
      aria-label={`View ${project.title} project overview`}
      draggable="false"
    >
      {cardContent}
    </Link>
  );
}

export default ProjectCard;
