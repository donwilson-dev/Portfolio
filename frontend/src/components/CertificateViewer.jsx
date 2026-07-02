import ImageViewer from './ImageViewer.jsx';

function CertificateViewer({ certificate, onClose }) {
  if (!certificate) {
    return null;
  }

  return (
    <ImageViewer
      title={certificate.title}
      image={certificate.image}
      imageAlt={`${certificate.title} certificate`}
      onClose={onClose}
      initialFocus="dialog"
      variant="certificate"
    />
  );
}

export default CertificateViewer;
