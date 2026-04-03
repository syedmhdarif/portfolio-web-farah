import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'blossom' ? 'cloudscape' : 'blossom'} theme`}
      title={`Switch to ${theme === 'blossom' ? 'Cloudscape' : 'Blossom'} theme`}
    >
      <span className="theme-toggle-icon">
        {theme === 'blossom' ? '☁️' : '🌸'}
      </span>
      <span className="theme-toggle-text">
        {theme === 'blossom' ? 'Cloudscape' : 'Blossom'}
      </span>
    </button>
  );
}
