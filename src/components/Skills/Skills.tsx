import { skills, languages } from '../../data/resume';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Skills & Languages</h2>
        <p className="section-subtitle animate-fade-in-up delay-1">
          Core competencies and multilingual abilities
        </p>

        <div className="skills-content">
          <div className="skills-section">
            <h3 className="skills-section-title">Professional Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item animate-fade-in-up delay-${Math.min(index + 2, 5)}`}
                >
                  <div className="skill-header">
                    <div>
                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="languages-section">
            <h3 className="languages-section-title">Languages</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className={`language-card animate-fade-in-up delay-${index + 2}`}
                >
                  <div className="language-icon">
                    {index === 0 ? '🇲🇾' : index === 1 ? '🇬🇧' : '🇸🇦'}
                  </div>
                  <h4 className="language-name">{lang.name}</h4>
                  <span className="language-proficiency">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
