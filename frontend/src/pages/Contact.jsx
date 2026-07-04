import ContactCard from "../components/ContactCard.jsx";
import { contactMethods } from "../data/contact.js";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero__content page-container">
          <div className="contact-hero__copy">
            <h1 id="contact-title">Let's Connect</h1>
            <p className="contact-hero__introduction">
              Whether you'd like to discuss a project, explore a potential
              opportunity, or just connect with a fellow developer - I'm always
              open to a conversation.
            </p>
          </div>

          <div className="contact-methods" aria-label="Contact options">
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
