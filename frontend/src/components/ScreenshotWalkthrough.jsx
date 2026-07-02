function ScreenshotWalkthrough({ project }) {
  if (project.screenshots.length === 0) {
    return (
      <div className="showcase-placeholder" role="note" aria-label={`${project.title} screenshot status`}>
        <img src={project.artwork.showcase} alt="" loading="lazy" />
        <p>{project.screenshotPlaceholder}</p>
      </div>
    );
  }

  return (
    <div className="screenshot-grid" aria-label={`${project.title} screenshot walkthrough`}>
      {project.screenshots.map((screenshot) => (
        <figure className="screenshot-card" key={screenshot.title}>
          <img
            src={screenshot.image}
            alt={`Screenshot of ${project.title}: ${screenshot.title}`}
            loading="lazy"
          />
          <figcaption>
            <span>{screenshot.title}</span>
            {screenshot.description}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ScreenshotWalkthrough;
