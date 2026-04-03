import { useState } from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Involvement', href: '#involvement' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <span className="navbar-logo-icon">🌺</span>
          <span className="navbar-logo-text">Farah Amirah</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`navbar-toggle-bar ${isOpen ? 'open' : ''}`} />
          <span className={`navbar-toggle-bar ${isOpen ? 'open' : ''}`} />
          <span className={`navbar-toggle-bar ${isOpen ? 'open' : ''}`} />
        </button>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
