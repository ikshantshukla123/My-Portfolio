import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactForm = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent('Hello Ikshant,\n\nI would like to get in touch with you regarding your portfolio.\n\nBest regards,');
    window.open(`mailto:ikshankshukla44@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:+91 8109537034" title="Give me a call">
                  +91 8109537034
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a href="mailto:ikshankshukla44@gmail.com" title="Send me an email">
                  ikshankshukla44@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ikshankkk/" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              </a>
            </li>
          </ul>
          <hr />
        </div>
        
        <div className="contact-form-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!</p>
            <div className="contact-buttons">
              <button onClick={handleEmailClick} className="contact-btn email-btn">
                <FontAwesomeIcon icon={faEnvelope} />
                Send Email
              </button>
              <a href="tel:+91 8109537034" className="contact-btn phone-btn">
                <FontAwesomeIcon icon={faPhone} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;

