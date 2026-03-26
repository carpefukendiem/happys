'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Request a Free Estimate</h2>
          <p className="section-desc">Fill out the form below and we&apos;ll get back to you within one business day.</p>
        </div>
        <div className="contact-grid">
          <form className="contact-form" data-animate="fade-up" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required placeholder="John" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required placeholder="Doe" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" id="phone" name="phone" required placeholder="(805) 500-0335" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="location">Preferred Location</label>
              <select id="location" name="location">
                <option value="santa-barbara">Santa Barbara — 135 S Milpas St</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service">
                <option value="">Select a service...</option>
                <option value="collision-repair">Collision Repair</option>
                <option value="paintless-dent">Paintless Dent Repair</option>
                <option value="paint-refinish">Paint & Refinish</option>
                <option value="frame-repair">Frame & Unibody Repair</option>
                <option value="hail-damage">Hail & Storm Damage</option>
                <option value="insurance-claim">Insurance Claim Assistance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Vehicle & Damage</label>
              <textarea id="message" name="message" rows="5" placeholder="Please describe the damage, vehicle make/model/year, and any other details..."></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={submitted}
              style={submitted ? { background: '#2d7d46', borderColor: '#2d7d46' } : {}}
            >
              {submitted ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Estimate Request
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </>
              )}
            </button>
          </form>
          <div className="contact-sidebar" data-animate="fade-up" data-delay="150">
            <div className="contact-info-card">
              <h3>Quick Contact</h3>
              <div className="contact-info-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div>
                  <strong>Call Us</strong>
                  <a href="tel:8055000335">(805) 500-0335</a>
                </div>
              </div>
              <div className="contact-info-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:info@happyscollisioncenter.com">info@happyscollisioncenter.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <div>
                  <strong>Business Hours</strong>
                  <span>Closed · Opens 9 AM</span>
                </div>
              </div>
            </div>
            <div className="contact-info-card contact-warranty-card">
              <div className="warranty-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10" strokeWidth="2"></polyline></svg>
              </div>
              <h3>5-Year Nationwide Warranty</h3>
              <p>Every qualifying repair is backed by our industry-leading warranty, honored at 700+ CARSTAR locations across North America.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
