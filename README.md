# 🌺 Farah Amirah — Portfolio Website

> **Live Demo**: [https://portfolio-web-farah.syedarifjr.workers.dev/](https://portfolio-web-farah.syedarifjr.workers.dev/)

A beautiful, responsive portfolio website built with **React + TypeScript + Vite** featuring two elegant themes — Blossom (floral rose garden) and Cloudscape (ethereal clouds).

## ✨ Features

- 🎨 **Dual Themes** — Toggle between Blossom (pink/green) and Cloudscape (blue/lavender)
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🖱️ **Smooth Navigation** — Smooth scroll to sections from navbar, footer, and hero
- 📄 **Download Resume** — One-click PDF resume download
- 📧 **Clickable Contacts** — Email, phone, and LinkedIn are all interactive
- 🚀 **Personal Space** — Dedicated page for future personal projects & case studies
- ✨ **Animations** — Subtle CSS animations and touch-friendly interactions

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Routing**: React Router (Hash Router)
- **Styling**: Pure CSS with custom properties (CSS variables)
- **Theming**: React Context API

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio-web-farah

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run stop     # Stop the dev server
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About/          # About Me + Education timeline
│   ├── Experience/     # Work experience cards
│   ├── Footer/         # Footer with contacts & quick links
│   ├── Hero/           # Hero section with profile photo
│   ├── Involvement/    # Leadership & activities
│   ├── Navbar/         # Responsive navigation
│   ├── Projects/       # Academic project showcases
│   ├── Skills/         # Skill bars + language cards
│   └── ThemeToggle/    # Theme switcher button
├── contexts/           # React Context (ThemeContext)
├── data/               # Resume content (resume.ts)
├── pages/              # Additional pages (PersonalSpace)
├── styles/             # Global styles & theme variables
├── App.tsx             # Main app with routing
└── main.tsx            # Entry point
```

## 🎨 Themes

| Theme | Description |
|-------|-------------|
| 🌸 **Blossom** | Soft pink, blush, sage green with floral decorations |
| ☁️ **Cloudscape** | Soft blues, lavenders, pearl whites with ethereal feel |

## 📱 Mobile Support

- Touch-friendly interactions with `:active` states
- Responsive grids that collapse to single column
- Safe area support for notched devices
- Mobile menu with body scroll lock
- Optimized tap targets (44px+)

## 📝 Resume

The resume PDF is available for download in the `public/` folder. To update it, replace `public/Resume-Farah-2025.pdf` with the latest version.

## 🌐 Deployment

This site is deployed on Cloudflare Workers Pages.

**Live URL**: [https://portfolio-web-farah.syedarifjr.workers.dev/](https://portfolio-web-farah.syedarifjr.workers.dev/)
