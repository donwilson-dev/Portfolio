import ContactCard from '../components/ContactCard.jsx';
import { contactMethods } from '../data/contact.js';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero page-container" aria-labelledby="contact-title">
        <p className="contact-page__eyebrow">Contact</p>
        <h1 id="contact-title">Professional communication</h1>
        <p>
          Choose the best channel for project discussions, source review, direct email, or current resume
          requests.
        </p>
      </section>

      <section className="contact-section page-container" aria-labelledby="contact-methods-title">
        <div className="contact-section__header">
          <p className="contact-page__eyebrow">Methods</p>
          <h2 id="contact-methods-title">Contact Options</h2>
        </div>
        <div className="contact-grid">
          {contactMethods.map((method) => (
            <ContactCard key={method.id} method={method} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
