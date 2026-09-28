import React, { useState } from 'react';
import ShinyText from '../ShinyText/ShinyText';
import characterCutout from '../../assets/character-cutout.png';
import './ContactSection.css';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Website + App',
    message: ''
  });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('workb8717@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hi Jay,%0A%0AMy Name: ${encodeURIComponent(formData.name || 'Not provided')}%0AContact: ${encodeURIComponent(formData.contact || 'Not provided')}%0ASelected Service: ${encodeURIComponent(formData.service)}%0A%0AProject Details:%0A${encodeURIComponent(formData.message || 'I would like to discuss a new project.')}`;
    window.open(`https://wa.me/918780054574?text=${text}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section">
      {/* Ambient Backdrop Layer */}
      <div className="contact-ferro-bg-wrapper">
        <div className="contact-ambient-backdrop" />
      </div>

      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-index-pill">
            <span className="contact-index-dot" />
            <span className="contact-index-text">04 / GET IN TOUCH</span>
          </div>

          <h2 className="contact-headline">
            <ShinyText
              text="LET'S BUILD TOGETHER"
              disabled={false}
              speed={4}
              className="contact-shiny-title"
              color="#9a9aa2"
              shineColor="#ffffff"
              spread={135}
            />
          </h2>

          <p className="contact-description">
            Have a project in mind, need a monthly retainer, or want to discuss a custom build? Reach out directly across any channel below.
          </p>
        </div>

        {/* Main Content Grid: Left Channels + Right Direct Form */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Connection Cards */}
          <div className="contact-cards-col">
            {/* WhatsApp & Call Card */}
            <div className="contact-card whatsapp-card">
              <div className="contact-card-laser" />
              <div className="contact-card-header">
                <div className="contact-icon-box whatsapp-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className="contact-card-meta">
                  <span className="contact-meta-label">PHONE & WHATSAPP</span>
                  <span className="contact-speed-badge">⚡ Fastest Response</span>
                </div>
              </div>

              <div className="contact-card-body">
                <span className="contact-value-title">+91 87800 54574</span>
                <p className="contact-card-sub">Available for chat, scope discussions, and direct calls.</p>
              </div>

              <div className="contact-card-actions">
                <a
                  href="https://wa.me/918780054574?text=Hi%20Jay,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-btn primary-whatsapp"
                >
                  <span>Chat on WhatsApp</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a
                  href="tel:+918780054574"
                  className="contact-action-btn secondary-btn"
                >
                  <span>Call Direct</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card email-card">
              <div className="contact-card-laser" />
              <div className="contact-card-header">
                <div className="contact-icon-box email-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-card-meta">
                  <span className="contact-meta-label">DIRECT EMAIL</span>
                  <span className="contact-sub-badge">Formal inquiries</span>
                </div>
              </div>

              <div className="contact-card-body">
                <span className="contact-value-title email-title">workb8717@gmail.com</span>
                <p className="contact-card-sub">Send project briefs, requirements, or documents.</p>
              </div>

              <div className="contact-card-actions">
                <button
                  onClick={handleCopyEmail}
                  className="contact-action-btn copy-email-btn"
                >
                  <span>{copied ? '✓ Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
                <a
                  href="mailto:workb8717@gmail.com?subject=Project%20Inquiry%20for%20Jay"
                  className="contact-action-btn secondary-btn"
                >
                  <span>Open Mail App</span>
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="contact-card instagram-card">
              <div className="contact-card-laser" />
              <div className="contact-card-header">
                <div className="contact-icon-box instagram-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="contact-card-meta">
                  <span className="contact-meta-label">INSTAGRAM</span>
                  <span className="contact-sub-badge">Socials & DM</span>
                </div>
              </div>

              <div className="contact-card-body">
                <span className="contact-value-title">@crazzy_x23</span>
                <p className="contact-card-sub">Follow creative updates, behind the scenes, and drop a DM.</p>
              </div>

              <div className="contact-card-actions">
                <a
                  href="https://www.instagram.com/crazzy_x23?stkn=dnByNTAwMnk1MGxy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-btn instagram-btn"
                >
                  <span>Visit Instagram Profile</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Box */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="contact-form-laser" />
              <div className="contact-form-header">
                <div className="contact-form-title-wrap">
                  <span className="contact-form-kicker">DIRECT INQUIRY</span>
                  <h3 className="contact-form-title">Send a Quick Message</h3>
                </div>
                <div className="contact-live-status">
                  <span className="contact-status-dot" />
                  <span>Available</span>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmitWhatsApp}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact" className="form-label">Email / Phone Number</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="e.g. alex@example.com or +91 98765..."
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Interested Service / Package</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Website + App">Website + App</option>
                    <option value="Logo + Canva">Logo + Canva</option>
                    <option value="Script Writing">Script Writing</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Custom Project / Other">Custom Project / Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Details & Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me a bit about your goals, timeline, and requirements..."
                    className="form-textarea"
                    required
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Send via WhatsApp</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>

                <p className="form-note">
                  🔒 Messages are routed directly to Jay without any third-party marketing or spam.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Minimalist Clean Footer */}
        <footer className="contact-footer">
          <div className="footer-left">
            <div className="footer-avatar">
              <img src={characterCutout} alt="Jay" />
            </div>
            <div className="footer-brand-info">
              <span className="footer-brand-name">Jay.J</span>
              <span className="footer-brand-tag">Evolving AI Generalist</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#subscription">Subscription</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-right">
            <span className="footer-copy">© {new Date().getFullYear()} Jay.J. All rights reserved.</span>
            <button onClick={scrollToTop} className="footer-top-btn" aria-label="Back to top">
              <span>Back to Top</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
