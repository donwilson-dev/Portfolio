import bullseyeIcon from '../assets/icons/bullseye-arrow-svgrepo-com.svg';
import checkCircleIcon from '../assets/icons/check-mark-circle-svgrepo-com.svg';
import codeIcon from '../assets/icons/code.svg';
import ibmIcon from '../assets/icons/ibm-svgrepo-com.svg';
import salesforceIcon from '../assets/icons/salesforce-svgrepo-com.svg';

const issuerIcons = {
  'ibm-full-stack-software-developer': ibmIcon,
  'salesforce-certified-administrator': salesforceIcon,
};

function CertificateCard({ certificate, onSelect }) {
  return (
    <article className="certificate-card">
      <div className="certificate-card__main">
        <button
          className="certificate-card__media"
          type="button"
          onClick={onSelect}
          aria-label={`View ${certificate.title} certificate`}
        >
          <img src={certificate.image} alt="" loading="lazy" />
        </button>

        <div className="certificate-card__content">
          <h3 className="certificate-card__title">{certificate.title}</h3>
          <p className="certificate-card__type">{certificate.type}</p>
          <div className="certificate-card__issued">
            <span className="certificate-card__issuer" aria-hidden="true">
              <img src={issuerIcons[certificate.id]} alt="" loading="lazy" />
            </span>
            <span className="certificate-card__issued-text">
              <span className="certificate-card__issued-label">Issued</span>
              <span className="certificate-card__issued-date">{certificate.issued}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="certificate-card__details">
        <section className="certificate-card__detail-column">
          <h4>
            <img src={codeIcon} alt="" aria-hidden="true" />
            Technologies Covered
          </h4>
          <p className="certificate-card__detail-intro">{certificate.technologiesCovered.intro}</p>
          <ul
            aria-label={`${certificate.title} technologies covered`}
            className="certificate-card__check-list"
          >
            {certificate.technologiesCovered.items.map((item) => (
              <li key={item}>
                <img src={checkCircleIcon} alt="" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="certificate-card__detail-column">
          <h4>
            <img src={bullseyeIcon} alt="" aria-hidden="true" />
            Skills Developed
          </h4>
          <p className="certificate-card__detail-intro">{certificate.skillsDeveloped.intro}</p>
          <ul aria-label={`${certificate.title} skills developed`}>
            {certificate.skillsDeveloped.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default CertificateCard;
