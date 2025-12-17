# Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimalist design with creative typography
- ✨ Smooth CSS animations and transitions
- 📱 Fully responsive design for all devices
- 🎯 Smooth scroll navigation
- 🚀 Optimized performance
- 📝 JSON-based data management for easy content updates

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS transitions and keyframes
- **Fonts**: Inter, Poppins, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Experience timeline
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── data/
│   └── portfolio.json   # Portfolio data (easily editable)
└── public/              # Static assets
```

## Customization

All portfolio content can be easily updated by editing the `data/portfolio.json` file. This includes:

- Personal information (name, title, location, contact)
- Skills and technologies
- Work experience
- Projects
- Social media links

### Editing Your Portfolio Data

1. Open `data/portfolio.json`
2. Update the relevant sections
3. Save the file
4. Changes will be reflected immediately in development mode

## Design Features

- **Color Scheme**: Dark theme with primary blue accents
- **Typography**: Creative use of display fonts (Poppins) for headings and clean sans-serif (Inter) for body text
- **Animations**: CSS-based transitions and hover interactions
- **Responsive Breakpoints**: Mobile-first approach with sm, md, lg breakpoints

## Deployment

This portfolio can be deployed to Vercel, Netlify, or any platform that supports Next.js:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on Vercel
3. Deploy automatically

### Other Platforms

Follow the platform-specific Next.js deployment instructions.

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!
