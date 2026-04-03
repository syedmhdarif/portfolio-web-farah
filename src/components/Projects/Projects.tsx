import { academicProjects } from '../../data/resume';
import './Projects.css';

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="floral-decoration top-right" />
      
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Academic Projects</h2>
        <p className="section-subtitle animate-fade-in-up delay-1">
          Meaningful initiatives and community engagement
        </p>

        <div className="projects-grid">
          {academicProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card animate-fade-in-up delay-${Math.min(index + 2, 5)}`}
            >
              <div className="project-card-icon">
                {project.icon}
              </div>
              <span className="project-type">{project.type}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="project-impact">
                  🎯 {project.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
