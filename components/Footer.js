import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/happys-logo.png" alt="Happy's Collision Center" width={230} height={62} className="footer-logo" />
            <p>Proudly serving Santa Barbara with expert collision repair for over 25 years. Part of the CARSTAR Auto Body Repair Experts network.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/happysshop_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.yelp.com/biz/happys-auto-body-and-paint-shop-santa-barbara-2" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <Link href="#services">Collision Repair</Link>
            <Link href="#services">Paintless Dent Repair</Link>
            <Link href="#services">Expert Color Matching</Link>
            <Link href="#services">Frame & Unibody Repair</Link>
            <Link href="#services">Hail & Storm Damage</Link>
            <Link href="#services">Insurance Assistance</Link>
          </div>
          <div className="footer-links">
            <h4>Santa Barbara</h4>
            <a href="https://www.google.com/maps/dir//502+E+Haley+St,+Santa+Barbara,+CA+93103" target="_blank" rel="noopener noreferrer">502 E Haley St</a>
            <a href="tel:8055000335">(805) 500-0335</a>
            <span>Mon – Fri: 8 AM – 6 PM</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CARSTAR Happy&apos;s Collision Center. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
