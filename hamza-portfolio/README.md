# Hamza Shahzad - AI/ML Engineer Portfolio

A modern, interactive portfolio website for Hamza Shahzad showcasing AI/ML expertise, projects, and professional achievements.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Beautiful neumorphic design with gradient accents
- **Smooth Animations**: Intersection observer-based scroll animations
- **Interactive Elements**: Spotlight cards, text rotators, and tech marquee
- **Contact Form**: Integrated contact form with success feedback
- **Dark Theme**: Premium dark theme with amber/gold accents
- **Component-based**: Modular React architecture for easy maintenance



## 🚀 Portfolio Demo
<img width="914" height="434" alt="image" src="https://github.com/user-attachments/assets/64bfe769-4ac7-45cd-b182-84d12a115fed" />
<img width="464" height="415" alt="image" src="https://github.com/user-attachments/assets/c1909134-677a-4438-825d-730c9e0d8951" />
<img width="475" height="413" alt="image" src="https://github.com/user-attachments/assets/2618a492-fe2b-415a-be29-7dbebaff2dfc" />
<img width="653" height="431" alt="image" src="https://github.com/user-attachments/assets/801d3156-f0a9-4571-8e15-1bf993b6aa35" />
<img width="433" height="440" alt="image" src="https://github.com/user-attachments/assets/7aa41974-2fbc-48e7-881e-c58b3786e147" />






## 📁 Project Structure

```
hamza-portfolio/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── SpotlightCard.jsx
│   │   │   ├── TextRotator.jsx
│   │   │   └── TechMarquee.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── AboutPreview.jsx
│   │   ├── ResearchFocus.jsx
│   │   ├── ProjectGallery.jsx
│   │   ├── SkillsAndServices.jsx
│   │   ├── EducationPreview.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
│   └── profile_img.jpeg (Your profile image)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Animation**: CSS Animations & Intersection Observer API

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Extract the project**
   ```bash
   unzip hamza-portfolio.zip
   cd hamza-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image**
   - Place your profile image in the `public/` folder
   - Ensure it's named `profile_img.jpeg` (or update the reference in `AboutPreview.jsx`)

4. **Update portfolio data** (Optional)
   - Edit `src/data/portfolioData.js` to update your information
   - Modify contact details, projects, skills, etc.

5. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📝 Customization Guide

### Updating Personal Information
Edit `src/data/portfolioData.js`:
```javascript
personal: {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  // ... other details
}
```

### Adding New Projects
Add to the `featuredProjects` array in `portfolioData.js`:
```javascript
{
  id: "p7",
  title: "Project Title",
  category: "Category",
  description: "Project description...",
  tech: ["Tech1", "Tech2"],
  github: "GitHub URL",
  demo: "Demo URL",
  image: "Image URL"
}
```

### Modifying Styles
- **Global styles**: Edit `src/App.css`
- **Component styles**: Use Tailwind classes directly in JSX
- **Tailwind config**: Update `tailwind.config.js`

### Updating Profile Image
Replace `public/profile_img.jpeg` with your own image, or update the image reference in `src/components/AboutPreview.jsx`.

## 🎨 Color Scheme

- **Primary**: Amber/Gold (#f59e0b)
- **Background**: Deep Zinc (#09090b)
- **Text**: Light Zinc (#e4e4e7)
- **Accents**: Yellow (#fbbf24)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 Navigation Sections

- **Home**: Hero section with call-to-action
- **About**: Personal bio with profile image
- **Research**: AI expertise areas
- **Projects**: Featured portfolio projects
- **Education**: Academic background
- **Services**: Skills and service offerings
- **Contact**: Contact form and direct contact info

## 💡 Key Features Explained

### Spotlight Cards
Cards that illuminate with a light gradient when you hover - adds interactive polish.

### Text Rotator
Automatically cycles through multiple text options with smooth transitions.

### Tech Marquee
Scrolling banner showcasing all technologies and tools.

### Animated Sections
Components fade in and slide up as they come into view using Intersection Observer API.

### Neumorphic Design
Modern design style using subtle shadows and insets for depth.

## 📞 Contact Information

Update in `src/data/portfolioData.js`:
- Email
- Phone
- Location
- Social links (GitHub, LinkedIn, Upwork)

## 🐛 Troubleshooting

**Image not showing?**
- Ensure `profile_img.jpeg` is in the `public/` folder
- Check the file path in `AboutPreview.jsx`

**Styles not applying?**
- Clear browser cache
- Rebuild with `npm run build`

**Build errors?**
- Delete `node_modules` and `dist` folders
- Run `npm install` again

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support

For questions or customization help, feel free to reach out.

---

**Created with ❤️ for Hamza Shahzad**
