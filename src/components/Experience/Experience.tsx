import { experiences } from '../../data/resume';
import './Experience.css';

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Experience</h2>
        <p className="section-subtitle animate-fade-in-up delay-1">
          Professional journey and work history
        </p>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card animate-fade-in-up delay-${index + 2}`}
            >
              <div className="experience-card-header">
                <div className="experience-icon-wrapper">
                  <span className="experience-icon">{exp.icon}</span>
                </div>
                <div className="experience-info">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="experience-highlight">
                    <span className="highlight-bullet">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
