import { personalInfo } from '../../data/resume';
import heroImage from '../../assets/wife-cantik.png';
import './Hero.css';

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function Hero() {
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('about');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-decoration" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in-up">
            <p className="hero-greeting">Assalamualaikum & Hello, I'm</p>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-title">{personalInfo.tagline}</p>

            <div className="hero-contact">
              <a href={`mailto:${personalInfo.email}`} className="hero-contact-item" title="Send email">
                <span className="hero-contact-icon">📧</span>
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="hero-contact-item" title="Call phone">
                <span className="hero-contact-icon">📱</span>
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-contact-item" title="View LinkedIn profile">
                <span className="hero-contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <span className="hero-contact-item">
                <span className="hero-contact-icon">📍</span>
                <span>{personalInfo.location}</span>
              </span>
            </div>

            <div className="hero-actions">
              <a href="#about" className="btn btn-primary" onClick={handleAboutClick}>
                Learn More About Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn btn-secondary"
              >
                📄 Download Resume
              </a>
            </div>
          </div>

          <div className="hero-image animate-fade-in-up delay-2">
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <img src={heroImage} alt="Farah Amirah" className="hero-image-photo" />
              </div>
              <div className="hero-image-decoration" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}
