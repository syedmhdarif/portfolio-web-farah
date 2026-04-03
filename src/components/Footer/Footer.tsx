import { personalInfo, references } from '../../data/resume';
import './Footer.css';

export function Footer() {
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
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Academic Projects</a></li>
              <li><a href="#skills">Skills & Languages</a></li>
              <li><a href="#involvement">Leadership & Involvement</a></li>
              <li><a href="/personal-space">Personal Space</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="footer-credit">Built with ❤️ and React</p>
        </div>
      </div>
    </footer>
  );
}
