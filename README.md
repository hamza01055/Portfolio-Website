# Portfolio Website

Personal portfolio for **Hamza Shahzad**, an AI Engineer — built as a fully custom React site with scroll-linked animations, a live Three.js neural-network canvas in the hero, and a real project showcase instead of a static resume page.

**Repo:** [github.com/hamza01055/Portfolio-Website](https://github.com/hamza01055/Portfolio-Website)

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) for scroll-linked and interactive animations
- [React Three Fiber](https://r3f.docs.pmnd.rs/) for the hero's neural-network canvas
- [Lucide](https://lucide.dev/) for icons
- [Oxlint](https://oxc.rs/) for linting

## Pages

### `/` — Home

- **Hero** — intro, stats, CTAs (Hire Me / Project Showcase / Resume), photo gallery
- **Work** — curated project case studies with a detail modal per project
- **Skills** — toolkit/technologies dashboard
- **GitHub activity** — contribution graph and stats
- **Blog** — featured and latest articles
- **System Design** — architecture gallery
- **Contact** — social links (GitHub, LinkedIn, Instagram, X, Telegram, WhatsApp), Book a Call, email

### `/about` — About

- **About Me** — bio and social links
- **Experience** — current role and responsibilities
- **Journey** — education/career timeline

## Project structure

```text
src/
  data/
    projects.js        # project case-study data
  pages/
    Hero.jsx
    About.jsx
    Journey.jsx
    Work.jsx
    GitHubActivity.jsx
    Blog.jsx
    Home.jsx           # assembles the "/" route
    AboutPage.jsx      # assembles the "/about" route
  components/
    shared.jsx         # Navbar, search modal, shared UI primitives, icons
    sections.jsx       # Skills, System Design gallery, Contact, footer
  App.jsx              # routing + top-level layout/theme state
  main.jsx
```

## Getting started

```bash
git clone https://github.com/hamza01055/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Then open http://localhost:5173

### Other scripts

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run Oxlint
```

## License

MIT

## Author

**Hamza Shahzad** — AI Engineer

- GitHub: [github.com/hamza01055](https://github.com/hamza01055)
- LinkedIn: [linkedin.com/in/hamzashahzad](https://linkedin.com/in/hamzashahzad)
