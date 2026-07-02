import { useEffect, useRef } from 'react';
import closeIcon from '../assets/icons/close.svg';

function CertificateViewer({ certificate, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!certificate) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) {
    return null;
  }

  return (
    <div
      className="certificate-viewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-viewer-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="certificate-viewer__dialog">
        <div className="certificate-viewer__header">
          <h2 id="certificate-viewer-title">{certificate.title}</h2>
          <button
            className="certificate-viewer__close"
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Close certificate viewer"
          >
            <img src={closeIcon} alt="" aria-hidden="true" />
          </button>
        </div>
        <div className="certificate-viewer__image-frame">
          <img src={certificate.image} alt={`${certificate.title} certificate`} />
        </div>
      </div>
    </div>
  );
}

export default CertificateViewer;
