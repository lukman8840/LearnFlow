import React from 'react';
import '../../styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below or reach out directly.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: support@learnflow.com</p>
            <p>Phone: +234 704 575 8446</p>
            <p>Location: Abuja, Nigeria</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
