import { Link } from 'react-router-dom';

function ProjectCard({ project, isSelected, onSelect, trackSet, trackIndex }) {
  const statusClassName = [
    'project-card__status',
    project.cardStatusTone ? `project-card__status--${project.cardStatusTone}` : null,
  ]
    .filter(Boolean)
    .join(' ');

  const projectCardClassName = [
    'project-card',
    !project.isPlaceholder ? 'project-card--active' : null,
    isSelected ? 'project-card--selected' : null,
  ]
    .filter(Boolean)
    .join(' ');

  const cardContent = (
    <>
      <span className="project-card__artwork">
        <img src={project.artwork.card} alt="" loading="lazy" draggable="false" />
      </span>
      <span className="project-card__content">
        {project.artwork.cardTitleImage ? (
          <img
            className="project-card__title-image"
            src={project.artwork.cardTitleImage}
            alt={project.title}
            loading="lazy"
            draggable="false"
          />
        ) : (
          <span className="project-card__title">{project.title}</span>
        )}
        {project.cardDescription ? (
          <span className="project-card__description">{project.cardDescription}</span>
        ) : null}
        <span className={statusClassName}>{project.cardStatus ?? project.status}</span>
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
      className={projectCardClassName}
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
