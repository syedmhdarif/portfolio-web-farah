import { useLocation, useNavigate } from 'react-router-dom';
import { personalInfo, references } from '../../data/resume';
import './Footer.css';

const quickLinks = [
  { label: 'About Me', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Academic Projects', href: 'projects' },
  { label: 'Skills & Languages', href: 'skills' },
  { label: 'Leadership & Involvement', href: 'involvement' },
];

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  const handleQuickLinkClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (!isHomePage) {
      navigate(`/#/${sectionId}`);
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Let's Connect</h3>
            <p className="footer-text">
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="footer-contact">
              <a href={`mailto:${personalInfo.email}`} className="footer-contact-item">
                📧 {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="footer-contact-item">
                📱 {personalInfo.phone}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                💼 LinkedIn Profile
              </a>
              <span className="footer-contact-item">
                📍 {personalInfo.location}
              </span>
            </div>
          </div>

          {references.length > 0 && (
            <div className="footer-section">
              <h3 className="footer-title">Reference</h3>
              {references.map((ref, index) => (
                <div key={index} className="footer-reference">
                  <p className="reference-name">{ref.name}</p>
                  <p className="reference-title">{ref.title}</p>
                  <a href={`mailto:${ref.email}`} className="reference-contact">
                    📧 {ref.email}
                  </a>
                  <a href={`tel:${ref.phone.replace(/[^0-9+]/g, '')}`} className="reference-contact">
                    📱 {ref.phone}
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleQuickLinkClick(link.href, e)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/personal-space">Personal Space</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="footer-credit">Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
