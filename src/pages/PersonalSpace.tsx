import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import './PersonalSpace.css';

export function PersonalSpace() {
  return (
    <div className="personal-space">
      <Navbar />
      
      <main className="personal-space-main">
        <div className="container">
          <div className="personal-space-header animate-fade-in-up">
            <h1 className="personal-space-title">Personal Space</h1>
            <p className="personal-space-subtitle">
              A dedicated area for personal projects, case studies, and learning journeys
            </p>
          </div>

          <div className="personal-space-coming-soon animate-fade-in-up delay-2">
            <div className="coming-soon-card">
              <div className="coming-soon-icon">🚀</div>
              <h2>Coming Soon</h2>
              <p>
                This section is currently under development. It will showcase:
              </p>
              <ul className="coming-soon-features">
                <li>
                  <span className="feature-icon">📂</span>
                  <div>
                    <h3>Personal Projects</h3>
                    <p>Independent initiatives and creative endeavors</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">📊</span>
                  <div>
                    <h3>Case Studies</h3>
                    <p>In-depth analysis and insights from university learnings</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">💡</span>
                  <div>
                    <h3>Learning Journey</h3>
                    <p>Knowledge gained and applied throughout academic career</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">🎯</span>
                  <div>
                    <h3>Research & Insights</h3>
                    <p>Academic research and professional development reflections</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="personal-space-cta animate-fade-in-up delay-3">
            <a href="/" className="btn btn-primary">
              ← Back to Portfolio
            </a>
            <a href="/Resume-Farah-2025.pdf" download className="btn btn-secondary">
              📄 Download Resume
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
