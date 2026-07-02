import externalIcon from '../assets/icons/external.svg';
import githubIcon from '../assets/icons/github.svg';

function ShowcaseRepositoryLink({ project }) {
  if (!project.githubUrl) {
    return (
      <div className="showcase-repository showcase-repository--placeholder" role="note">
        <span>
          <img src={githubIcon} alt="" aria-hidden="true" />
          {project.githubStatus}
        </span>
      </div>
    );
  }

  return (
    <a
      className="showcase-repository"
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${project.title} GitHub repository, opens in a new tab`}
    >
      <span>
        <img src={githubIcon} alt="" aria-hidden="true" />
        GitHub Repository
      </span>
      <img src={externalIcon} alt="" aria-hidden="true" />
    </a>
  );
}

export default ShowcaseRepositoryLink;
