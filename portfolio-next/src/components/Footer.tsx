'use client';

import { navLinks, socialLinks, footerData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Contact */}
          <div>
            <h3 className="footer__heading">Contact</h3>
            <div className="footer__contact-item">
              <i className="fas fa-envelope" />
              <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-map-marker-alt" />
              <span>
                <a href={footerData.schoolUrl} target="_blank" rel="noopener noreferrer">
                  {footerData.school}
                </a>
                <br />
                {footerData.location}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <div className="footer__links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="footer__heading">Connect</h3>
            <div className="footer__socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label={link.label}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          © 2026 Saim Haroon. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
