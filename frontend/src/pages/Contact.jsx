import ContactCard from '../components/ContactCard.jsx';
import { contactMethods } from '../data/contact.js';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero__content page-container">
          <div className="contact-hero__copy">
            <p className="contact-page__eyebrow">Contact</p>
            <h1 id="contact-title">Professional communication</h1>
            <p className="contact-hero__introduction">
              Choose the best channel for project discussions, source review, direct email, or current
              resume requests.
            </p>
          </div>

          <div className="contact-methods" aria-labelledby="contact-methods-title">
            <div className="contact-methods__header">
              <p className="contact-page__eyebrow">Methods</p>
              <h2 id="contact-methods-title">Contact Options</h2>
            </div>
            <div className="contact-grid">
              {contactMethods.map((method) => (
                <ContactCard key={method.id} method={method} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
