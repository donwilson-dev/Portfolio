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

function ContactCard({ method }) {
  const titleId = `contact-card-${method.id}-title`;
  const descriptionId = `contact-card-${method.id}-description`;
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
    <article className="contact-card" aria-labelledby={titleId} aria-describedby={descriptionId}>
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
      </a>
    </article>
  );
}

export default ContactCard;
