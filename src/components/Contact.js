import React, { useState } from 'react';
import '../styles/Contact.css';

// ── Where messages go ────────────────────────────────────────────────
// 1. Create a free form at https://formspree.io  (use bhanuprakashnamburi553@gmail.com)
// 2. Copy your form ID (looks like "xrgkabcd") and paste it below.
// Until you do, the form falls back to opening the visitor's email app.
const FORMSPREE_ID = 'mbdezwer';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
const FALLBACK_EMAIL = 'bhanuprakashnamburi553@gmail.com';
const isConfigured = FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const resetSoon = () => {
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // No backend configured yet → open the visitor's email client (always works).
    if (!isConfigured) {
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${encodeURIComponent(
        formData.message
      )}`;
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio enquiry'
      )}&body=${body}`;
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        resetSoon();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data?.errors?.[0]?.message ||
            'Something went wrong sending your message. Please email me directly.'
        );
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Network error — please check your connection or email me directly.');
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-eyebrow">Let's talk</span>
        <h2>Get In Touch</h2>
        <p className="section-subtitle">I'd love to hear from you. Let's connect and create something amazing together!</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:bhanuprakashnamburi553@gmail.com">bhanuprakashnamburi553@gmail.com</a>
              </p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>
                <a href="tel:+917569184265">+91 7569184265</a>
              </p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Guntur, India</p>
            </div>
            <div className="info-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/bhanuprakash-namburi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/bhanu_chowdary_161405" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {status === 'success' && (
              <div className="form-alert success-message" role="status">
                ✅ Thanks! Your message has been sent — I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-alert error-message" role="alert">
                ⚠️ {errorMsg}{' '}
                <a href={`mailto:${FALLBACK_EMAIL}`}>{FALLBACK_EMAIL}</a>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                disabled={sending}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                disabled={sending}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={sending}
                placeholder="Project inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={sending}
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? (
                <>
                  <span className="spinner" aria-hidden="true"></span> Sending…
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
