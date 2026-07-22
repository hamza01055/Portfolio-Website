# Portfolio Website

Personal portfolio for **Hamza Shahzad**, an AI Engineer — built as a fully custom React site with scroll-linked animations, a live Three.js neural-network canvas in the hero, and a real project showcase instead of a static resume page.

**Repo:** [github.com/hamza01055/Portfolio-Website](https://github.com/hamza01055/Portfolio-Website)
<img width="960" height="540" alt="Screenshot 2026-07-22 121022" src="https://github.com/user-attachments/assets/87426f8f-51bd-4f18-a9ea-fef2ddf5e486" />
<img width="960" height="540" alt="Screenshot 2026-07-22 121046" src="https://github.com/user-attachments/assets/bdac6839-d6d9-45f0-a193-c6e684951480" />
<img width="960" height="540" alt="Screenshot 2026-07-22 121036" src="https://github.com/user-attachments/assets/5d138bc4-9314-4aea-bbae-04d5b26bf7c1" />
<img width="960" height="540" alt="Screenshot 2026-07-22 121117" src="https://github.com/user-attachments/assets/00b29854-e137-42ef-819c-60ea56334d4b" />
<img width="960" height="540" alt="Screenshot 2026-07-22 121128" src="https://github.com/user-attachments/assets/b32dcb53-1169-40a1-a050-27e70a325132" />

<img width="960" height="540" alt="Screenshot 2026-07-22 121136" src="https://github.com/user-attachments/assets/e1e6cd35-31ed-40e6-85f9-11f6840d6c1c" />

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
