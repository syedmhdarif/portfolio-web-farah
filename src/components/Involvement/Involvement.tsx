import { leadership, involvements } from '../../data/resume';
import './Involvement.css';

export function Involvement() {
  return (
    <section id="involvement" className="section involvement">
      <div className="floral-decoration bottom-left" />
      
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Leadership & Involvement</h2>
        <p className="section-subtitle animate-fade-in-up delay-1">
          Active participation and community engagement
        </p>

        {leadership.length > 0 && (
          <div className="leadership-section">
            <h3 className="leadership-section-title">🏆 Leadership</h3>
            {leadership.map((role, index) => (
              <div
                key={index}
                className={`leadership-card animate-fade-in-up delay-${index + 2}`}
              >
                <div className="leadership-header">
                  <span className="leadership-icon">{role.icon}</span>
                  <div>
                    <h4 className="leadership-role">{role.role}</h4>
                    <p className="leadership-project">{role.project}</p>
                  </div>
                </div>
                <ul className="leadership-responsibilities">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leadership-responsibility">
                      <span className="responsibility-bullet">✦</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="involvements-section">
          <h3 className="involvements-section-title">🎯 Activities & Involvements</h3>
          <div className="involvements-grid">
            {involvements.map((inv, index) => (
              <div
                key={index}
                className={`involvement-card animate-fade-in-up delay-${Math.min(index + 2, 5)}`}
              >
                <div className="involvement-icon">{inv.icon}</div>
                <span className="involvement-event">{inv.event}</span>
                <h4 className="involvement-title">{inv.title}</h4>
                <ul className="involvement-highlights">
                  {inv.highlights.map((highlight, idx) => (
                    <li key={idx} className="involvement-highlight">
                      <span className="highlight-bullet">✦</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
