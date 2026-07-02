function CertificateCard({ certificate, onSelect }) {
  return (
    <button
      className="certificate-card"
      type="button"
      onClick={onSelect}
      aria-label={`View ${certificate.title} certificate`}
    >
      <span className="certificate-card__media">
        <img src={certificate.image} alt="" loading="lazy" />
      </span>
      <span className="certificate-card__content">
        <span className="certificate-card__title">{certificate.title}</span>
        <span className="certificate-card__description">{certificate.description}</span>
      </span>
    </button>
  );
}

export default CertificateCard;
