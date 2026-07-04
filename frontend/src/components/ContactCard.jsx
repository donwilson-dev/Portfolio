import emailIcon from '../assets/icons/email.svg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import resumeIcon from '../assets/icons/resume.svg';

const contactIcons = {
  email: emailIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  resume: resumeIcon,
};

function ContactActionIcon({ type }) {
  if (type === 'message') {
    return (
      <svg
        className="contact-card__action-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
        <path d="M12 11h.01" />
        <path d="M16 11h.01" />
        <path d="M8 11h.01" />
      </svg>
    );
  }

  if (type === 'external') {
    return (
      <svg
        className="contact-card__action-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    );
  }

  return null;
}

function ContactCard({ method }) {
  const titleId = `contact-card-${method.id}-title`;
  const descriptionId = `contact-card-${method.id}-description`;
  const actionIconType = method.id === 'resume' ? 'message' : method.external ? 'external' : null;
  const linkProps = method.external
    ? {
        target: '_blank',
        rel: 'noreferrer noopener',
        'aria-label': `${method.actionLabel}, opens in a new tab`,
      }
    : {
        'aria-label': `${method.actionLabel} to ${method.value}`,
      };

  return (
    <article
      className={`contact-card contact-card--${method.id}`}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="contact-card__icon" aria-hidden="true">
        <img src={contactIcons[method.icon]} alt="" />
      </div>
      <div className="contact-card__content">
        <h2 id={titleId}>{method.title}</h2>
        <p id={descriptionId}>{method.description}</p>
        {method.value ? <p className="contact-card__value">{method.value}</p> : null}
      </div>
      <a className="contact-card__action" href={method.href} {...linkProps}>
        {method.actionLabel}
        <ContactActionIcon type={actionIconType} />
      </a>
    </article>
  );
}

export default ContactCard;
