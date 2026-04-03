import { summary, education } from '../../data/resume';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about">
      <div className="floral-decoration top-right" />
      <div className="floral-decoration bottom-left" />
      
      <div className="container">
        <h2 className="section-title animate-fade-in-up">About Me</h2>
        <p className="section-subtitle animate-fade-in-up delay-1">
          Get to know me better
        </p>

        <div className="about-content">
          <div className="about-summary animate-fade-in-up delay-2">
            <div className="about-card">
              <div className="about-card-icon">✨</div>
              <h3>Who I Am</h3>
              <p>{summary}</p>
            </div>
          </div>

          <div className="about-education">
            <h3 className="about-education-title">Education Journey</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`education-item animate-fade-in-up delay-${Math.min(index + 2, 5)}`}
                >
                  <div className="education-timeline-marker">
                    <span className="education-icon">{edu.logo}</span>
                  </div>
                  <div className="education-card">
                    <div className="education-header">
                      <div>
                        <h4 className="education-degree">{edu.degree}</h4>
                        <p className="education-institution">{edu.institution}</p>
                      </div>
                      <span className="education-period">{edu.period}</span>
                    </div>
                    {edu.details && (
                      <p className="education-details">{edu.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
